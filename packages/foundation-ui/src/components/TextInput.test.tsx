import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders a labelled input and accepts text', async () => {
    const user = userEvent.setup();
    render(<TextInput label='Name' placeholder='Enter name' />);
    const input = screen.getByRole('textbox', { name: 'Name' });
    await user.type(input, 'Ada');
    expect(input).toHaveValue('Ada');
  });

  it('renders helper and error content', () => {
    render(<TextInput label='Name' error='Name is required' />);
    expect(screen.getByRole('textbox', { name: 'Name' })).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });
});