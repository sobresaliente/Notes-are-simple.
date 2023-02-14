import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <AppLink to="/" theme={AppLinkTheme.PRIMARY}>
        {t('home')}
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        {t('about')}
      </AppLink>
    </header>
  );
};

export default Navbar;
