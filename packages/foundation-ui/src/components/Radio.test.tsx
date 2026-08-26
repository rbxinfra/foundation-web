import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio, RadioGroup } from './Radio';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  } as unknown as typeof ResizeObserver;
});

describe('Radio', () => {
  it('selects an option in a group', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(
      <RadioGroup onValueChange={onValueChange}>
        <Radio value='one' label='One' />
        <Radio value='two' label='Two' />
      </RadioGroup>
    );
    await user.click(screen.getByRole('radio', { name: 'Two' }));
    expect(onValueChange).toHaveBeenCalledWith('two');
  });

  it('supports a disabled radio and hint', () => {
    render(<RadioGroup><Radio value='one' label='One' hint='Unavailable' isDisabled /></RadioGroup>);
    expect(screen.getByRole('radio', { name: 'One' })).toBeDisabled();
    expect(screen.getByText('Unavailable')).toBeInTheDocument();
  });
});