import { useRef } from "react";
import Input from "../Input";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import Cycles from "../Cycles";
import Button from "../Button";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { TaskActionTypes } from "../../context/TaskContext/taskActions";
import Tips from "../Tips";

const MainForm = () => {
  const taskNameInput = useRef<HTMLInputElement>(null);

  const { dispatch, state } = useTaskContext();

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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
  };

  const handleInterruptTask = () => {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
          <Tips />
        </span>
      </div>
      <div className="formRow">{state.currentCycle > 0 && <Cycles />}</div>
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
