import { render, screen } from '@testing-library/react';
import React from 'react';
import AppButton, { ThemeButton } from './AppButton';

describe('AppButton', () => {
  test('Text', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('Class', () => {
    render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
