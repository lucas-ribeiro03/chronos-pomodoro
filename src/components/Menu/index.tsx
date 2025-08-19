import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { RouterLink } from "../Link";

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
      <RouterLink href="" className={styles.menuLink}>
        <HouseIcon />
      </RouterLink>
      <RouterLink href="" className={styles.menuLink}>
        <HistoryIcon />
      </RouterLink>
      <RouterLink href="" className={styles.menuLink}>
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        href=""
        onClick={handleChangeTheme}
        className={styles.menuLink}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </RouterLink>
    </nav>
  );
};

export default Menu;
