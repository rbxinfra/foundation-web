import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressCircle } from './ProgressCircle';

describe('ProgressCircle', () => {
  it('renders progress and percentage text', () => {
    render(<ProgressCircle ariaLabel='Progress' value={75} showValue />);
    expect(screen.getByRole('progressbar', { name: 'Progress' })).toHaveAttribute('aria-valuenow', '75');
    expect(screen.getByText('75')).toBeInTheDocument();
    expect(screen.getByText('%')).toBeInTheDocument();
  });
});