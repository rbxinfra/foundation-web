import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FeedbackBanner } from './FeedbackBanner';

describe('FeedbackBanner', () => {
  it('renders its message and dismissal action', async () => {
    const user = userEvent.setup();
    const onDismiss = jest.fn();
    render(<FeedbackBanner title='Saved' description='Your changes are live.' onDismiss={onDismiss} />);
    expect(screen.getByRole('status')).toHaveTextContent('Saved');
    await user.click(screen.getByRole('button', { name: 'Dismiss banner' }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});