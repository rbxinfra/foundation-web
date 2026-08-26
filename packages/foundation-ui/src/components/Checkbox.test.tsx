import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

const props = { size: 'Medium' as const, placement: 'Start' as const };

describe('Checkbox', () => {
  it('renders a labelled checkbox and toggles', async () => {
    const user = userEvent.setup();
    const onCheckedChange = jest.fn();
    render(<Checkbox {...props} label='Accept' onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByRole('checkbox', { name: 'Accept' });
    await user.click(checkbox);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('supports checked, disabled, and hint states', () => {
    render(<Checkbox {...props} label='Accept' hint='Required' isChecked isDisabled />);
    expect(screen.getByRole('checkbox', { name: 'Accept' })).toBeDisabled();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});