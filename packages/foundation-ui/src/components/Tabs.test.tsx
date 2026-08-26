import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

describe('Tabs', () => {
  it('switches visible tab content', async () => {
    const user = userEvent.setup();
    render(<Tabs defaultValue='one'><TabsList><TabsTrigger value='one'>One</TabsTrigger><TabsTrigger value='two'>Two</TabsTrigger></TabsList><TabsContent value='one'>First content</TabsContent><TabsContent value='two'>Second content</TabsContent></Tabs>);
    expect(screen.getByText('First content')).toBeVisible();
    await user.click(screen.getByRole('tab', { name: 'Two' }));
    expect(screen.getByText('Second content')).toBeVisible();
  });

  it('supports controlled values and disabled tabs', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(<Tabs value='one' onValueChange={onValueChange}><TabsList><TabsTrigger value='one'>One</TabsTrigger><TabsTrigger value='two' isDisabled>Two</TabsTrigger></TabsList><TabsContent value='one'>First</TabsContent><TabsContent value='two'>Second</TabsContent></Tabs>);
    expect(screen.getByRole('tab', { name: 'Two' })).toBeDisabled();
    await user.click(screen.getByRole('tab', { name: 'One' }));
    expect(onValueChange).not.toHaveBeenCalled();
  });
});