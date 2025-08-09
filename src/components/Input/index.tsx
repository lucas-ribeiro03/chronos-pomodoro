import styles from "./styles.module.css";

type InputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">;
const Input = ({ id, labelText, ...rest }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} {...rest} className={styles.input} />
    </>
  );
};

export default Input;
