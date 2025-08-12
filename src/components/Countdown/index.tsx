import { useTaskContext } from "../../context/TaskContext/useTaskContext";
import styles from "./styles.module.css";

const Countdown = () => {
  const { state } = useTaskContext();
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
};

export default Countdown;
