import styles from "./styles.module.css";
import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

const Cycles = () => {
  const { state } = useTaskContext();
  const cycleSteps = Array.from({ length: state.currentCycle });

  return (
    <div className={styles.cycles}>
      <p>Ciclos</p>
      <div className={styles.cycleDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);

          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              title={`indicador de ${nextCycleType}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Cycles;
