import { useRef } from "react";
import Input from "../Input";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

const MainForm = () => {
  const taskNameInput = useRef<HTMLInputElement>(null);

  const { setState, state } = useTaskContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(state.currentCycle);

    if (!taskNameInput.current) return alert("Insira uma tarefa");
    const taskName = taskNameInput.current.value.trim();

    if (!taskName) return alert("Insira uma tarefa");

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prev) => {
      return {
        ...prev,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: "00:00",
        tasks: [...prev.tasks, newTask],
        config: { ...prev.config },
      };
    });
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <div className="formRow">
        <Input
          id="input"
          type="text"
          labelText="task"
          placeholder="Digite a tarefa"
          ref={taskNameInput}
        />
      </div>
      <div className="formRow">
        <span>
          Nesse ciclo <strong>foque</strong>por <strong>25 min.</strong>
        </span>
      </div>
      <div className="formRow">
        <button>botao</button>
      </div>
    </form>
  );
};

export default MainForm;
