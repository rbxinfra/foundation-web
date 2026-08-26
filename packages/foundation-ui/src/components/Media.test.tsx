import React from 'react';
import { render, screen } from '@testing-library/react';
import { Media } from './Media';

describe('Media', () => {
  it('renders an image with its source and alt text', () => {
    render(<Media src='/image.png' alt='Example' aspectRatio='16:9' />);
    expect(screen.getByRole('img', { name: 'Example' })).toHaveAttribute('src', '/image.png');
  });
});