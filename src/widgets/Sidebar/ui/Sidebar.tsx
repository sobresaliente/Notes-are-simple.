import { log } from "console";
import { useState } from "react";
import classNames from "shared/lib/classNames";
import { ThemeToggler } from "widgets/ThemeToggler";
import styles from "./Sidebar.module.scss";
interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>aaaa</button>
      <div className={classNames(styles.switchers, {}, [])}>
        <ThemeToggler />
      </div>
    </div>
  );
};
export default Sidebar;
