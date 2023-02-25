import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { withTranslation } from 'react-i18next';
import renderWithTranslation from '../../../shared/lib/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('Text', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('toggle');
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
