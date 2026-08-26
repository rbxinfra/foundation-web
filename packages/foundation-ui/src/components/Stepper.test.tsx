import React from 'react';
import { render, screen } from '@testing-library/react';
import { Stepper } from './Stepper';

beforeAll(() => {
  HTMLElement.prototype.scrollIntoView = jest.fn();
});

describe('Stepper', () => {
  it('renders steps and descriptions', () => {
    render(<Stepper aria-label='Checkout steps' showDescription steps={[{ label: 'Cart', description: 'Review items', state: 'complete' }, { label: 'Payment', state: 'current' }]} />);
    expect(screen.getByLabelText('Checkout steps')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('Review items')).toBeInTheDocument();
    expect(screen.getByText('Payment')).toBeInTheDocument();
  });

  it('derives complete and current states from the current index', () => {
    render(<Stepper steps={[{ label: 'First' }, { label: 'Second' }, { label: 'Third' }]} currentStepIndex={1} />);
    expect(screen.getByRole('listitem', { name: /1 of 3: First/ })).toBeInTheDocument();
    expect(screen.getByRole('listitem', { name: /2 of 3: Second/ })).toHaveAttribute('aria-current', 'step');
  });
});