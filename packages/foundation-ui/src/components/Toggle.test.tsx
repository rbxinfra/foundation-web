import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

const props = { size: 'Medium' as const, placement: 'Start' as const };

describe('Toggle', () => {
  it('toggles and reports the checked state', async () => {
    const user = userEvent.setup();
    const onCheckedChange = jest.fn();
    render(<Toggle {...props} label='Enabled' onCheckedChange={onCheckedChange} />);
    await user.click(screen.getByRole('switch', { name: 'Enabled' }));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('supports disabled and hint states', () => {
    render(<Toggle {...props} label='Enabled' hint='Turn on' isDisabled />);
    expect(screen.getByRole('switch', { name: 'Enabled Turn on' })).toBeDisabled();
    expect(screen.getByText('Turn on')).toBeInTheDocument();
  });
});