import React from 'react';
import { render, screen } from '@testing-library/react';
import { Timeline, TimelineItem } from './Timeline';

describe('Timeline', () => {
  it('renders timeline items', () => {
    render(<Timeline><TimelineItem title='Created' description='Today' /></Timeline>);
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Today')).toBeInTheDocument();
  });
});