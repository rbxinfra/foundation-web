import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

beforeAll(() => {
  HTMLElement.prototype.hasPointerCapture = () => false;
  HTMLElement.prototype.setPointerCapture = () => {};
  HTMLElement.prototype.releasePointerCapture = () => {};
});

describe('Dropdown', () => {
  it('opens and reports menu state', () => {
    const onOpenChange = jest.fn();
    render(<Dropdown size='Medium' placeholder='Choose one' onOpenChange={onOpenChange}> </Dropdown>);
    fireEvent.click(screen.getByRole('combobox'));
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });

  it('renders labels, hints, errors, and disabled state', () => {
    render(<Dropdown size='Medium' label='Category' placeholder='Choose one' hint='Required' hasError isDisabled> </Dropdown>);
    expect(screen.getByRole('combobox', { name: 'Category' })).toBeDisabled();
    expect(screen.getByText('Required')).toBeInTheDocument();
  });
});