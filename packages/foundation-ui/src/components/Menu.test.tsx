import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu, MenuItem, MenuLabel, MenuSection, MenuSeparator } from './Menu';

describe('Menu', () => {
  it('renders menu items and handles selection', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Menu><MenuItem title='Edit' onSelect={onClick} /></Menu>);
    await user.click(screen.getByRole('menuitem', { name: 'Edit' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders sections, labels, separators, and descriptions', () => {
    render(
      <Menu>
        <MenuLabel title='Actions' description='Choose an action' />
        <MenuSection>
          <MenuItem title='Edit' description='Modify this item' />
        </MenuSection>
        <MenuSeparator />
      </Menu>
    );

    expect(screen.getByText('Actions')).toBeInTheDocument();
    expect(screen.getByText('Choose an action')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /Edit Modify this item/ })).toBeInTheDocument();
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('does not select disabled items and supports anchor items', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <Menu>
        <MenuItem title='Disabled' disabled onSelect={onSelect} />
        <MenuItem title='Open' as='a' href='/open' />
      </Menu>
    );

    await user.click(screen.getByRole('menuitem', { name: 'Disabled' }));
    expect(onSelect).not.toHaveBeenCalled();
    expect(screen.getByRole('menuitem', { name: 'Open' })).toHaveAttribute('href', '/open');
  });
});