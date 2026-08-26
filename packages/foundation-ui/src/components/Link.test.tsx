import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Link } from './Link';

describe('Link', () => {
  it('renders an anchor with navigation props', () => {
    render(<Link href='/details' underline='always'>Details</Link>);
    expect(screen.getByRole('link', { name: 'Details' })).toHaveAttribute('href', '/details');
    expect(screen.getByRole('link', { name: 'Details' })).toHaveClass('underline');
  });

  it('supports button behavior', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Link as='button' onClick={onClick}>Run</Link>);
    await user.click(screen.getByRole('button', { name: 'Run' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});