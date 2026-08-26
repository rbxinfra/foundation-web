import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SegmentedControl } from './SegmentedControl';

describe('SegmentedControl', () => {
  it('selects an item and reports its value', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(<SegmentedControl value='one' onValueChange={onValueChange} items={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]} />);
    await user.click(screen.getByRole('radio', { name: 'Two' }));
    expect(onValueChange).toHaveBeenCalledWith('two');
  });

  it('does not select disabled items and supports icon items', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(<SegmentedControl variant='Icon' value='one' onValueChange={onValueChange} items={[{ value: 'one', icon: 'icon-filled-circle-check', 'aria-label': 'One' }, { value: 'two', icon: 'icon-filled-circle-i', 'aria-label': 'Two', isDisabled: true }]} />);
    await user.click(screen.getByRole('radio', { name: 'Two' }));
    expect(onValueChange).not.toHaveBeenCalled();
    expect(screen.getByRole('radio', { name: 'One' })).toHaveAttribute('aria-checked', 'true');
  });
});