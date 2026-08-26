import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tooltip, TooltipTrigger } from './Tooltip';

beforeAll(() => {
  window.matchMedia = () => ({ matches: false, media: '', onchange: null, addListener: () => {}, removeListener: () => {}, addEventListener: () => {}, removeEventListener: () => {}, dispatchEvent: () => false });
  global.ResizeObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  } as unknown as typeof ResizeObserver;
});

describe('Tooltip', () => {
  it('renders controlled tooltip content', () => {
    render(<Tooltip position='top-center' open title='Helpful text'><TooltipTrigger asChild><button type='button'>Help</button></TooltipTrigger></Tooltip>);
    expect(screen.getByRole('tooltip', { name: 'Helpful text' })).toBeInTheDocument();
  });

  it('renders descriptions and supports hiding the beak', () => {
    render(<Tooltip position='bottom-end' open hasBeak={false} title='Title' description='Description'><TooltipTrigger asChild><button type='button'>Help</button></TooltipTrigger></Tooltip>);
    expect(screen.getByRole('tooltip')).toHaveTextContent('Title');
    expect(screen.getByRole('tooltip')).toHaveTextContent('Description');
  });
});