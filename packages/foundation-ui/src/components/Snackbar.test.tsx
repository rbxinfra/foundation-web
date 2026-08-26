import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Snackbar } from './Snackbar';

describe('Snackbar', () => {
  it('renders its message and action', async () => {
    const user = userEvent.setup();
    const onAction = jest.fn();
    render(<Snackbar title='Saved' actionLabel='Undo' onAction={onAction} shouldAutoDismiss={false} />);
    expect(screen.getByRole('status')).toHaveTextContent('Saved');
    await user.click(screen.getByRole('button', { name: 'Undo' }));
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it('dismisses through its close affordance after the exit transition', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(<Snackbar title='Saved' onClose={onClose} shouldAutoDismiss={false} />);
    await user.click(screen.getByRole('button', { name: 'Dismiss snackbar' }));
    await new Promise(resolve => setTimeout(resolve, 180));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});