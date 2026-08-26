import React from 'react';
import { render, screen } from '@testing-library/react';
import { SystemBanner } from './SystemBanner';

describe('SystemBanner', () => {
  it('renders title and description with severity semantics', () => {
    render(<SystemBanner title='Maintenance' description='Brief outage' severity='Warning' />);
    expect(screen.getByRole('alert')).toHaveTextContent('Maintenance');
    expect(screen.getByText('Brief outage')).toBeInTheDocument();
  });
});