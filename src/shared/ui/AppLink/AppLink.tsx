import { LinkProps } from "react-router-dom";
import { Link } from "react-router-dom";
import classNames from "shared/lib/classNames";
import styles from "./AppLink.module.scss";
interface Props extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const AppLink: React.FC<Props> = (props) => {
  const {
    children,
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...additionalProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...additionalProps}
    >
      {children}
    </Link>
  );
};
export default AppLink;
