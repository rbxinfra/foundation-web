import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders and handles clicks', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Save</Button>);
    await user.click(screen.getByRole('button', { name: 'Save' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('supports disabled, loading, and link states', () => {
    const { rerender } = render(<Button isDisabled>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    rerender(<Button isLoading>Save</Button>);
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    rerender(<Button as='a' href='/save'>Save</Button>);
    expect(screen.getByRole('link', { name: 'Save' })).toHaveAttribute('href', '/save');
  });
});