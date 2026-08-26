import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatusBadge } from './StatusBadge';

describe('StatusBadge', () => {
  it('renders its label and status indicator', () => {
    render(<StatusBadge label='Online' variant='Success' />);
    expect(screen.getByText('Online')).toBeInTheDocument();
    expect(screen.getByTestId('status-badge-indicator')).toBeInTheDocument();
  });
});