import React from 'react';
import { render, screen } from '@testing-library/react';
import { CollectionCarousel } from './CollectionCarousel';

describe('CollectionCarousel', () => {
  it('renders carousel content', () => {
    render(<CollectionCarousel><div>Collection item</div></CollectionCarousel>);
    expect(screen.getByText('Collection item')).toBeInTheDocument();
  });

  it('renders labelled navigation controls', async () => {
    render(<CollectionCarousel aria-label='Featured items' previousButtonAriaLabel='Back' nextButtonAriaLabel='Forward'><div>Item one</div><div>Item two</div></CollectionCarousel>);
    expect(screen.getByRole('region', { name: 'Featured items' })).toBeInTheDocument();
    expect(screen.getByTestId('collection-carousel-nav-previous')).toHaveAttribute('data-visible', 'false');
    expect(screen.getByTestId('collection-carousel-nav-next')).toHaveAttribute('data-visible', 'false');
  });
});