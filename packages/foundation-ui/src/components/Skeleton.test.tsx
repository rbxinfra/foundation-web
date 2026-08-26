import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('renders the selected shape and dimensions', () => {
    render(<Skeleton variant='Circle' width={40} height={40} data-testid='skeleton' />);
    const skeleton = screen.getByTestId('skeleton');
    expect(skeleton).toHaveAttribute('aria-hidden', 'true');
    expect(skeleton).toHaveAttribute('data-variant', 'Circle');
    expect(skeleton).toHaveStyle({ width: '40px', height: '40px' });
  });
});