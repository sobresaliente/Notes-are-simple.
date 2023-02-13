import { ButtonHTMLAttributes } from 'react';
import classNames from 'shared/lib/classNames';
import styles from './AppButton.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const AppButton: React.FC<Props> = (props) => {
  const {
    className, theme, children, ...additionalProps
  } = props;

  return (
    <button
      className={classNames(styles.AppButton, {}, [className, styles[theme]])}
      {...additionalProps}
    >
      {children}
    </button>
  );
};
export default AppButton;
