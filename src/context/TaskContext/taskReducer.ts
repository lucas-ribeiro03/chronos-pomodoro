import type { TaskStateModel } from "../../models/TaskStateModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
import { TaskActionTypes, type TaskActionModel } from "./taskActions";

export const taskReducer = (
  state: TaskStateModel,
  action: TaskActionModel
): TaskStateModel => {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const secondsRemaining = newTask.duration * 60;
      const nextCycle = getNextCycle(state.currentCycle);

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: secondsToMinutes(secondsRemaining),
        tasks: [...state.tasks, newTask],
        config: { ...state.config },
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
      };
    }
    case TaskActionTypes.RESET_TASK: {
      return state;
    }
  }
};
