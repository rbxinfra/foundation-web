import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders a labelled textarea and accepts text', async () => {
    const user = userEvent.setup();
    render(<TextArea label='Description' placeholder='Describe it' />);
    const textarea = screen.getByRole('textbox', { name: 'Description' });
    await user.type(textarea, 'Details');
    expect(textarea).toHaveValue('Details');
  });

  it('supports disabled and helper states', () => {
    render(<TextArea label='Description' helperText='Optional' isDisabled />);
    expect(screen.getByRole('textbox', { name: 'Description' })).toBeDisabled();
    expect(screen.getByText('Optional')).toBeInTheDocument();
  });
});