import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  ListItemChevronTrailingAccessory,
  ListItemIcon,
  ListItemLeadingAccessorySpacer,
  ListItemLeadingIcon,
  ListItemRadioAccessory,
  ListItemTrailingIcon
} from './ListItemAccessories';
import { ListItem } from './ListItem';

describe('ListItemAccessories', () => {
  it('renders icon and radio accessories', () => {
    render(
      <ListItem
        title='Item'
        leading={<ListItemLeadingIcon name='icon-filled-circle-check' data-testid='leading' />}
        trailing={<><ListItemTrailingIcon name='icon-filled-circle-i' data-testid='trailing' /><ListItemRadioAccessory isSelected /></>}
      />
    );
    expect(screen.getByTestId('leading')).toBeInTheDocument();
    expect(screen.getByTestId('trailing')).toBeInTheDocument();
    expect(screen.getByText('Item').closest('li')?.querySelector('.size-600')).toBeInTheDocument();
  });

  it('renders spacer and chevron accessories', () => {
    render(
      <ListItem title='Item' leading={<ListItemLeadingAccessorySpacer>Spacer</ListItemLeadingAccessorySpacer>} trailing={<ListItemChevronTrailingAccessory />} />
    );
    expect(screen.getByText('Spacer')).toBeInTheDocument();
  });
});