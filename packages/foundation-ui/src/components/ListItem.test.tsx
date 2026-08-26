import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListItem } from './ListItem';
import userEvent from '@testing-library/user-event';

describe('ListItem', () => {
  it('renders its label and supporting content', () => {
    render(<ListItem title='Item' description='Supporting text' />);
    expect(screen.getByText('Item')).toBeInTheDocument();
    expect(screen.getByText('Supporting text')).toBeInTheDocument();
  });

  it('supports selectable items and leading/trailing content', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(<ListItem title='Selectable' metadata='Meta' leading={<span>Leading</span>} trailing={<span>Trailing</span>} onSelect={onSelect} />);
    await user.click(screen.getByRole('button', { name: /Selectable Meta/ }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(screen.getByText('Leading')).toBeInTheDocument();
    expect(screen.getByText('Trailing')).toBeInTheDocument();
  });
});