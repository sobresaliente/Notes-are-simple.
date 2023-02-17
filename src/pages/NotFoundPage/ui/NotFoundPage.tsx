import classNames from 'shared/lib/classNames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface Props {
   className?: string;
}

const NotFoundPage: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>{t('Not Found')}</div>
  );
};
export default NotFoundPage;
