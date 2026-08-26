import React from 'react';
import { render, screen } from '@testing-library/react';
import { VisuallyHidden } from './VisuallyHidden';

describe('VisuallyHidden', () => {
  it('keeps hidden content in the accessibility tree', () => {
    render(<VisuallyHidden>Accessible text</VisuallyHidden>);
    expect(screen.getByText('Accessible text')).toBeInTheDocument();
  });
});