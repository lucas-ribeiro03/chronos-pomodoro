import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {
        <p>
          Chronos Pomodoro &copy; {new Date().getFullYear()} - Lucas Ribeiro
        </p>
      }
    </footer>
  );
};

export default Footer;
