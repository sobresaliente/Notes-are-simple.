import { render, screen } from '@testing-library/react';
import AppButton from './AppButton';

describe('AppButton', () => {
  test('Text', () => {
    render(<AppButton> </AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
