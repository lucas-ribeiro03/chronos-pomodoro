import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

const Tips = () => {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);

  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Descanso longo</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso é de <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Próximo descanso será longo</b>
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
};

export default Tips;
