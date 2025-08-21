import type { ToastContentProps } from "react-toastify";
import styles from "./styles.module.css";
import Button from "../Button";
import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

const Dialog = ({ closeToast, data }: ToastContentProps<string>) => {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>

        <div className={styles.buttonsContainer}>
          <Button
            onClick={() => closeToast(true)}
            icon={<ThumbsUpIcon />}
            aria-label="Confirmar ação"
            title="Confirmar ação"
            color="green"
          />

          <Button
            onClick={() => closeToast(false)}
            color="red"
            icon={<ThumbsDownIcon />}
            aria-label="Cancelar ação"
            title="Cancelar ação"
          />
        </div>
      </div>
    </>
  );
};

export default Dialog;
