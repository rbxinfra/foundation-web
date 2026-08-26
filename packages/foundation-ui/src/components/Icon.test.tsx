import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders a decorative icon with its size', () => {
    render(<Icon name='icon-filled-circle-check' size='Large' data-testid='icon' />);
    expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByTestId('icon')).toHaveClass('icon-filled-circle-check');
  });
});