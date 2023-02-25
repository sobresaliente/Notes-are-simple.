import { render } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../config/i18n/i18nTest';

const renderWithTranslation = (component) => {
  const a = 'flex';
  return render(
    <I18nextProvider i18n={i18n}>
      {component}
    </I18nextProvider>,
  );
};

export default renderWithTranslation;
