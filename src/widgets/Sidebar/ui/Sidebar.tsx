import React, { useState } from 'react';
import classNames from 'shared/lib/classNames';
import LanguageToggler from 'widgets/LanguageToggler/LanguageToggler';
import { ThemeToggler } from 'widgets/ThemeToggler';
import styles from './Sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar = ({ className }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button data-testid="toggle" type="button" onClick={onToggle}>toggle</button>
      <div className={classNames(styles.switchers, {}, [])}>
        <ThemeToggler />
        <LanguageToggler />
      </div>
    </div>
  );
};
export default Sidebar;
