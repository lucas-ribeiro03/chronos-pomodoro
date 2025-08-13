import { useRef } from "react";
import Input from "../Input";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { secondsToMinutes } from "../../utils/secondsToMinutes";
import Cycles from "../Cycles";
import Button from "../Button";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

const MainForm = () => {
  const taskNameInput = useRef<HTMLInputElement>(null);

  const { setState, state } = useTaskContext();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    console.log(nextCycle);

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
        formattedSecondsRemaining: secondsToMinutes(secondsRemaining),
        tasks: [...prev.tasks, newTask],
        config: { ...prev.config },
      };
    });
  };

  const handleInterruptTask = () => {
    setState((prev) => {
      return {
        ...prev,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
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
          disabled={state.activeTask ? true : false}
        />
      </div>
      <div className="formRow">
        <span>
          Nesse ciclo <strong>foque</strong>por <strong>25 min.</strong>
        </span>
      </div>
      <div className="formRow">{state.activeTask && <Cycles />}</div>
      <div className="formRow">
        {!state.activeTask ? (
          <Button
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            type="submit"
            color="green"
            icon={<PlayCircleIcon />}
            key="form_button"
          />
        ) : (
          <Button
            type="button"
            aria-label="Interromper tarefa atual"
            title="Interromper tarefa atual"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key="normal_button"
          />
        )}
      </div>
    </form>
  );
};

export default MainForm;
