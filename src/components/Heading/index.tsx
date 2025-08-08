import styles from "./Heading.module.css";

type HeadingProps = {
  children: React.ReactNode;
};
const Heading = ({ children }: HeadingProps) => {
  return <div className={styles.heading}>{children}</div>;
};

export default Heading;
