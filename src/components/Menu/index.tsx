import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "light" | "dark";

const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const handleChangeTheme = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a href="" className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a href="" className={styles.menuLink}>
        <HistoryIcon />
      </a>
      <a href="" className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a href="" onClick={handleChangeTheme} className={styles.menuLink}>
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </a>
    </nav>
  );
};

export default Menu;
