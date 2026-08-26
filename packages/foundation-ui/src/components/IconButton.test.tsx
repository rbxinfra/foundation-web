import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders an accessible button and handles clicks', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<IconButton icon='icon-filled-circle-check' ariaLabel='Confirm' onClick={onClick} />);
    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('supports disabled and anchor states', () => {
    const { rerender } = render(<IconButton icon='icon-filled-circle-check' ariaLabel='Confirm' isDisabled />);
    expect(screen.getByRole('button', { name: 'Confirm' })).toBeDisabled();
    rerender(<IconButton icon='icon-filled-circle-check' ariaLabel='Open' as='a' href='/open' />);
    expect(screen.getByRole('link', { name: 'Open' })).toHaveAttribute('href', '/open');
  });
});