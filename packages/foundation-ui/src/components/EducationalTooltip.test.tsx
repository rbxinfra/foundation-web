import React from 'react';
import { render, screen } from '@testing-library/react';
import { EducationalTooltip, EducationalTooltipContent, EducationalTooltipTitle, EducationalTooltipTrigger } from './EducationalTooltip';

beforeAll(() => {
  window.matchMedia = () => ({ matches: false, media: '', onchange: null, addListener: () => {}, removeListener: () => {}, addEventListener: () => {}, removeEventListener: () => {}, dispatchEvent: () => false });
  global.ResizeObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  } as unknown as typeof ResizeObserver;
});

describe('EducationalTooltip', () => {
  it('renders controlled educational content', () => {
    render(<EducationalTooltip open><EducationalTooltipTrigger asChild><button type='button'>Learn</button></EducationalTooltipTrigger><EducationalTooltipContent position='top-center' aria-label='Education'><EducationalTooltipTitle>More information</EducationalTooltipTitle></EducationalTooltipContent></EducationalTooltip>);
    expect(screen.getByRole('dialog', { name: 'More information' })).toHaveTextContent('More information');
  });
});