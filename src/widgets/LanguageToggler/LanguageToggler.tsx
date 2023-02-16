import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames';
import AppButton from 'shared/ui/AppButton/AppButton';
import styles from './LanguageToggler.module.scss';

interface Props {
  className?: string;
}

const LanguageToggler = ({ className }: Props) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <AppButton
      className={classNames(styles.LanguageToggler, {}, [className])}
      onClick={onToggle}
    >
      {t('language')}
    </AppButton>
  );
};
export default LanguageToggler;
