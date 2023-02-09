import { log } from "console";
import { useState } from "react";
import classNames from "shared/lib/classNames";
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
      className={classNames("aaa", { [styles.collapsed]: true }, [className])}
    >
      <div>aaaa</div>
    </div>
  );
};
export default Sidebar;
