import { Theme, useTheme } from "app/providers/ThemeProvider";
import classNames from "shared/lib/classNames";
import styles from "./ThemeToggler.module.scss";
import Moon from "shared/assets/icons/moon.svg";
import Sun from "shared/assets/icons/sun.svg";
import AppButton, { ThemeButton } from "shared/ui/AppButton/AppButton";

interface Props {
  className?: string;
}

const ThemeToggler: React.FC<Props> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
      className={classNames(styles.ThemeToggler, {}, [className])}
    >
      {theme === Theme.LIGHT ? (
        <Sun width={32} height={32} />
      ) : (
        <Moon width={32} height={32} />
      )}
    </AppButton>
  );
};
export default ThemeToggler;
