import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders heading, description, and content', () => {
    render(<Card eyebrow='Featured' title='Title' description='Description'>Content</Card>);
    expect(screen.getByText('Featured')).toBeInTheDocument();
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders trailing and media content', () => {
    render(<Card title='Title' trailing={<button type='button'>Action</button>} mediaRight={<span>Media</span>} />);
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    expect(screen.getByText('Media')).toBeInTheDocument();
  });
});