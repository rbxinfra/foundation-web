import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Notification } from './Notification';

describe('Notification', () => {
  it('renders notification content and actions', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Notification title='Update' description='Ready' timestamp='Now' primaryAction={{ label: 'Open', onClick }} />);
    expect(screen.getByText('Update')).toBeInTheDocument();
    expect(screen.getByText('Ready')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});