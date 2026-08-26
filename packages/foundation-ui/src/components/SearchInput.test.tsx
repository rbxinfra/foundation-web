import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchInput } from './SearchInput';

describe('SearchInput', () => {
  it('renders a search field and accepts text', async () => {
    const user = userEvent.setup();
    render(<SearchInput aria-label='Search' placeholder='Search items' />);
    const input = screen.getByRole('searchbox', { name: 'Search' });
    await user.type(input, 'items');
    expect(input).toHaveValue('items');
  });

  it('renders helper and error content', () => {
    render(<SearchInput aria-label='Search' error='Search failed' />);
    expect(screen.getByRole('searchbox')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Search failed')).toBeInTheDocument();
  });
});