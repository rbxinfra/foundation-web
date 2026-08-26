import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { OptionSelector } from './OptionSelector';

describe('OptionSelector', () => {
  it('renders details and handles selection', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(<OptionSelector layout='Vertical' size='Medium' type='Checkmark' label='Option' description='Details' isSelected={false} onSelect={onSelect} />);
    expect(screen.getByText('Option')).toBeInTheDocument();
    expect(screen.getByText('Details')).toBeInTheDocument();
    await user.click(screen.getByText('Option'));
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it('renders metadata, media, and disabled state', async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(<OptionSelector layout='Horizontal' size='Small' type='Checkbox' label='Plan' metadata='Monthly' media={<span>Media</span>} isSelected isDisabled onSelect={onSelect} />);
    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('Media')).toBeInTheDocument();
    await user.click(screen.getByText('Plan'));
    expect(onSelect).not.toHaveBeenCalled();
  });
});