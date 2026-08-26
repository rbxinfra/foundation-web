import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders a label and icon', () => {
    render(<Badge label='New' icon='icon-filled-circle-check' iconPosition='Trailing' />);
    expect(screen.getByText('New')).toBeInTheDocument();
    expect(screen.getByTestId('foundation-web-icon')).toHaveClass('icon-filled-circle-check');
  });

  it('supports icon-only badges and box shape', () => {
    const { container } = render(<Badge icon='icon-filled-circle-i' shape='Box' size='XSmall' />);
    expect(container.querySelector('.radius-small')).toBeInTheDocument();
    expect(screen.getByTestId('foundation-web-icon')).toBeInTheDocument();
  });
});