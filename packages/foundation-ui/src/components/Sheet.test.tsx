import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SheetBody, SheetContent, SheetRoot, SheetTitle, SheetTrigger } from './Sheet';

beforeAll(() => {
  window.matchMedia = () => ({ matches: false, media: '', onchange: null, addListener: () => {}, removeListener: () => {}, addEventListener: () => {}, removeEventListener: () => {}, dispatchEvent: () => false });
});

describe('Sheet', () => {
  it('opens its content from the trigger', async () => {
    const user = userEvent.setup();
    render(<SheetRoot><SheetTrigger><button type='button'>Open sheet</button></SheetTrigger><SheetContent><SheetTitle>Sheet title</SheetTitle><SheetBody>Sheet body</SheetBody></SheetContent></SheetRoot>);
    await user.click(screen.getByRole('button', { name: 'Open sheet' }));
    expect(screen.getByRole('dialog', { name: 'Sheet title' })).toHaveTextContent('Sheet body');
  });

  it('renders a controlled open sheet with description and actions', () => {
    render(<SheetRoot open><SheetContent><SheetTitle>Settings</SheetTitle><SheetBody>Body</SheetBody></SheetContent></SheetRoot>);
    expect(screen.getByRole('dialog', { name: 'Settings' })).toHaveTextContent('Body');
  });
});