import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders a horizontal separator by default', () => {
    render(<Divider />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('supports vertical orientation and custom classes', () => {
    render(<Divider orientation='vertical' className='custom-divider' />);
    expect(screen.getByRole('separator')).toHaveAttribute('data-orientation', 'vertical');
    expect(screen.getByRole('separator')).toHaveClass('custom-divider');
  });
});