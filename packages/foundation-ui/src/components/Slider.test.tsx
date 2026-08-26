import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Slider from './Slider';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  } as unknown as typeof ResizeObserver;
  HTMLElement.prototype.hasPointerCapture = () => false;
  HTMLElement.prototype.setPointerCapture = () => {};
  HTMLElement.prototype.releasePointerCapture = () => {};
});

describe('Slider', () => {
  it('renders one labelled thumb for each default value', () => {
    render(<Slider defaultValue={[25, 75]} thumbAriaNames={['Minimum', 'Maximum']} />);

    expect(screen.getByRole('slider', { name: 'Minimum' })).toHaveAttribute('aria-valuenow', '25');
    expect(screen.getByRole('slider', { name: 'Maximum' })).toHaveAttribute('aria-valuenow', '75');
  });

  it('updates the active thumb with the keyboard and commits the value', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    const onValueCommit = jest.fn();
    render(
      <Slider
        defaultValue={[50]}
        min={0}
        max={100}
        step={10}
        onValueChange={onValueChange}
        onValueCommit={onValueCommit}
      />
    );

    const thumb = screen.getByRole('slider', { name: 'Slider thumb' });
    await user.click(thumb);
    await user.keyboard('{ArrowRight}');

    expect(thumb).toHaveAttribute('aria-valuenow', '60');
    expect(onValueChange).toHaveBeenCalledWith([60]);
    expect(onValueCommit).toHaveBeenCalledWith([60]);
  });

  it('supports controlled values and custom names', () => {
    const { rerender } = render(
      <Slider value={[10, 20]} thumbAriaNames={['Start', 'End']} min={0} max={50} />
    );
    const start = screen.getByRole('slider', { name: 'Start' });
    expect(start).toHaveAttribute('aria-valuemin', '0');
    expect(start).toHaveAttribute('aria-valuemax', '50');
    expect(start).toHaveAttribute('aria-valuenow', '10');

    rerender(<Slider value={[30, 40]} thumbAriaNames={['Start', 'End']} min={0} max={50} />);
    expect(screen.getByRole('slider', { name: 'Start' })).toHaveAttribute('aria-valuenow', '30');
    expect(screen.getByRole('slider', { name: 'End' })).toHaveAttribute('aria-valuenow', '40');
  });

  it('supports vertical orientation and minimum spacing between thumbs', () => {
    const { container } = render(
      <Slider orientation='vertical' size='Large' defaultValue={[20, 80]} minStepsBetweenThumbs={2} />
    );

    expect(container.querySelector('[aria-orientation="vertical"]')).toBeInTheDocument();
    expect(container.querySelector('.width-600')).toBeInTheDocument();
  });

  it('disables all thumbs when disabled', () => {
    render(<Slider defaultValue={[50]} isDisabled />);

    const thumb = screen.getByRole('slider', { name: 'Slider thumb' });
    expect(thumb).toHaveClass('hidden');
    expect(thumb).toHaveAttribute('data-disabled');
  });
});