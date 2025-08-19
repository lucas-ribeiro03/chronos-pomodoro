import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";
import { RouterLink } from "../Link";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <RouterLink href="" className={styles.logoLink}>
        <TimerIcon />
        <span>Chronos</span>
      </Routerlink>
    </div>
  );
};

export default Logo;
