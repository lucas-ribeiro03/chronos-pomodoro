import styles from "./Heading.module.css";

type HeadingProps = {
  children: string;
};
const Heading = (props: HeadingProps) => {
  return <div className={styles.heading}>{props.children}</div>;
};

export default Heading;
