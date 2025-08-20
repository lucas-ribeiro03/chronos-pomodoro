import { useEffect, useReducer, useRef } from "react";
import { initialState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/timerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, initialState, () => {
    const storageState = localStorage.getItem("state");
    if (!storageState) return initialState;
    const parsedStorageState = JSON.parse(storageState);
    return {
      ...parsedStorageState,
      activeTask: null,
      formattedSecondsRemaining: "00:00",
      secondsRemaining: 0,
    };
  });
  const worker = TimerWorkerManager.getInstance();
  const loadBeepRef = useRef<() => void | null>(null);

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (loadBeepRef.current) {
        loadBeepRef.current();
        loadBeepRef.current = null;
      }
      dispatch({
        type: TaskActionTypes.COMPLETE_TASK,
      });
      worker.terminate();
    } else {
      dispatch({
        type: TaskActionTypes.COUNT_DOWN,
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`;
    if (!state.activeTask) {
      worker.terminate();
    }

    worker.postMessage(state);
  }, [state, worker]);

  useEffect(() => {
    if (state.activeTask && loadBeepRef.current === null) {
      loadBeepRef.current = loadBeep();
    } else {
      loadBeepRef.current = null;
    }
  }, [state.activeTask]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
