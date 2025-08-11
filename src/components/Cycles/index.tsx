import { useState } from "react";
import styles from "./styles.module.css";

const Cycles = () => {
  const [cycle, setCyle] = useState();

  return (
    <div>
      <p>Ciclos</p>
      <div className={styles.cicleDots}>.{styles.dots}</div>
    </div>
  );
};

export default Cycles;
