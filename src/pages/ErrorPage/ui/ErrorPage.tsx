import { useTranslation } from 'react-i18next';
import classNames from 'shared/lib/classNames';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <>
      <div className={classNames(styles.ErrorPage, {}, [])}>
        {t('Error Page')}
      </div>
      <button onClick={reloadPage}>{t('Update Error')}</button>
    </>
  );
};
export default ErrorPage;
