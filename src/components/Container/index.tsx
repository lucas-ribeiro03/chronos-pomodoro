import styles from "./Container.module.css";

type ContainerProps = {
  children: string;
};
const Container = ({ children }: ContainerProps) => {
  return (
    <>
      <div className={styles.container}>{children}</div>;
      <div className={styles.content}>{children}</div>;
    </>
  );
};

export default Container;
