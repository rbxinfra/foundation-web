import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders initials with an accessible label and status', () => {
    render(<Avatar alt='Jane Doe' initials='JD' status='Active' />);
    expect(screen.getByRole('img', { name: 'Jane Doe' })).toHaveTextContent('JD');
    expect(screen.getByTestId('avatar-status')).toHaveAttribute('data-status', 'Active');
  });

  it('falls back from an image to initials', () => {
    render(<Avatar src='/avatar.png' alt='Jane Doe' initials='JD' />);
    fireEvent.error(screen.getByTestId('avatar-image'));
    expect(screen.queryByTestId('avatar-image')).not.toBeInTheDocument();
    expect(screen.getByText('JD')).toBeInTheDocument();
  });
});