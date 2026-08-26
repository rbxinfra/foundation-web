import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatusIndicator } from './StatusIndicator';

describe('StatusIndicator', () => {
  it('renders a dot indicator', () => {
    render(<StatusIndicator color='Success' size='Large' data-testid='indicator' />);
    expect(screen.getByTestId('indicator')).toHaveClass('bg-system-success', 'size-250');
  });

  it('renders numeric values', () => {
    render(<StatusIndicator variant='Numeric' value='12' color='Standard' />);
    expect(screen.getByText('12')).toBeInTheDocument();
  });
});