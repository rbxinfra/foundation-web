import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Chip } from './Chip';

describe('Chip', () => {
  it('renders a checkable chip and reports state changes', async () => {
    const user = userEvent.setup();
    const onCheckedChange = jest.fn();
    render(<Chip text='Filter' isChecked={false} onCheckedChange={onCheckedChange} />);
    const chip = screen.getByRole('button', { name: 'Filter' });
    await user.click(chip);
    expect(chip).toHaveAttribute('aria-pressed', 'false');
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('supports links and trailing icons', () => {
    render(<Chip as='a' text='Open' href='/open' trailingIconName='icon-filled-x' />);
    expect(screen.getByRole('link', { name: 'Open' })).toHaveAttribute('href', '/open');
    expect(screen.getByTestId('foundation-web-icon')).toBeInTheDocument();
  });
});