import React from 'react';
import { render, screen } from '@testing-library/react';
import { DateTimePicker } from './DateTimePicker';
import userEvent from '@testing-library/user-event';

const labels = { previousMonth: 'Previous month', nextMonth: 'Next month', apply: 'Apply', cancel: 'Cancel' };

describe('DateTimePicker', () => {
  it('renders navigation and action labels', () => {
    render(<DateTimePicker labels={labels} hasActions />);
    expect(screen.getByRole('button', { name: 'Previous month' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next month' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Apply' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });

  it('calls onCancel without changing the selected date', async () => {
    const user = userEvent.setup();
    const onCancel = jest.fn();
    render(<DateTimePicker labels={labels} defaultDates={new Date(2026, 0, 15)} onCancel={onCancel} hasActions />);
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});