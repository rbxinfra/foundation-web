import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('renders determinate progress with an accessible value', () => {
    render(<ProgressBar ariaLabel='Upload progress' value={40} />);
    expect(screen.getByRole('progressbar', { name: 'Upload progress' })).toHaveAttribute('aria-valuenow', '40');
  });

  it('renders an indeterminate variant', () => {
    render(<ProgressBar ariaLabel='Loading' variant='Indeterminate' />);
    expect(screen.getByRole('progressbar', { name: 'Loading' })).not.toHaveAttribute('aria-valuenow');
  });
});