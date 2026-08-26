import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover, PopoverContent, PopoverTrigger } from './Popover';

describe('Popover', () => {
  it('opens content from its trigger', async () => {
    const user = userEvent.setup();
    render(<Popover><PopoverTrigger asChild><button type='button'>Open</button></PopoverTrigger><PopoverContent aria-label='Details'>Popover text</PopoverContent></Popover>);
    await user.click(screen.getByRole('button', { name: 'Open' }));
    expect(screen.getByRole('dialog', { name: 'Details' })).toHaveTextContent('Popover text');
  });
});