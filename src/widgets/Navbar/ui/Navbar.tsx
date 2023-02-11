import classNames from "shared/lib/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeToggler } from "widgets/ThemeToggler";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <AppLink to={"/"} theme={AppLinkTheme.PRIMARY}>
        Home
      </AppLink>
      <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
        About
      </AppLink>
    </header>
  );
};

export default Navbar;
