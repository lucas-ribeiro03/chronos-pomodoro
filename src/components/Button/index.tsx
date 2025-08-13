import styles from "./styles.module.css";

type ButtonProps = {
  color: string;
  icon: React.ReactNode;
} & React.ComponentProps<"button">;
const Button = ({ color, icon, ...rest }: ButtonProps) => {
  return (
    <>
      <button
        style={{ background: `${color}` }}
        {...rest}
        className={styles.button}
      >
        {icon}
      </button>
    </>
  );
};

export default Button;
