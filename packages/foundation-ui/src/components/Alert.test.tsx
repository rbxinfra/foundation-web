import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Alert } from './Alert';

function BasicAlert(props: Partial<React.ComponentProps<typeof Alert>> = {}) {
  const alertProps = {
    ...props,
    hasCloseAffordance: false
  } as React.ComponentProps<typeof Alert>;

  return (
    <Alert {...alertProps}>
      Alert message
    </Alert>
  );
}

describe('Alert', () => {
  it('renders an informational message with status semantics by default', () => {
    render(<BasicAlert />);

    expect(screen.getByRole('status')).toHaveTextContent('Alert message');
    expect(screen.getByRole('status')).toHaveClass('stroke-emphasis');
  });

  it.each([
    ['Warning', 'alert', 'stroke-system-warning'],
    ['Error', 'alert', 'stroke-system-alert'],
    ['Success', 'status', 'stroke-emphasis']
  ] as const)('uses the expected role and stroke for %s severity', (severity, role, stroke) => {
    render(<BasicAlert severity={severity} />);

    expect(screen.getByRole(role)).toHaveClass(stroke);
  });

  it('renders a feedback alert as a labelled region when it has actions', () => {
    render(<BasicAlert variant='Feedback' primaryActionLabel='Review' />);

    const region = screen.getByRole('region');
    expect(region).toHaveAttribute('aria-labelledby');
    expect(screen.getByRole('status')).toHaveTextContent('Alert message');
    expect(region).toHaveClass('radius-medium');
  });

  it('renders the primary action as a link when it has an href', () => {
    render(<BasicAlert primaryActionLabel='Learn more' primaryActionHref='/learn-more' />);

    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute(
      'href',
      '/learn-more'
    );
  });

  it('calls the primary action handler', async () => {
    const user = userEvent.setup();
    const onPrimaryAction = jest.fn();
    render(<BasicAlert primaryActionLabel='Review' onPrimaryAction={onPrimaryAction} />);

    await user.click(screen.getByRole('button', { name: 'Review' }));

    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });

  it('renders primary and secondary actions as buttons', async () => {
    const user = userEvent.setup();
    const onPrimaryAction = jest.fn();
    const onSecondaryAction = jest.fn();
    render(
      <BasicAlert
        primaryActionLabel='Confirm'
        secondaryActionLabel='Cancel'
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Confirm' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
    expect(onSecondaryAction).toHaveBeenCalledTimes(1);
  });

  it('renders and handles the dismiss affordance', async () => {
    const user = userEvent.setup();
    const onDismiss = jest.fn();
    render(<Alert onDismiss={onDismiss}>Dismissible message</Alert>);

    const dismissButton = screen.getByRole('button', { name: 'Dismiss alert' });
    expect(dismissButton).toBeInTheDocument();

    await user.click(dismissButton);

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('uses a custom close label', () => {
    render(
      <Alert onDismiss={jest.fn()} closeLabel='Close notification'>
        Dismissible message
      </Alert>
    );

    expect(screen.getByRole('button', { name: 'Close notification' })).toBeInTheDocument();
  });

  it('supports custom primary and secondary link targets', () => {
    render(
      <BasicAlert
        primaryActionLabel='Open'
        primaryActionLinkTarget={<a href='/custom-open'>Original label</a>}
        secondaryActionLabel='Back'
        secondaryActionLinkTarget={<a href='/custom-back'>Original label</a>}
      />
    );

    expect(screen.getByRole('link', { name: 'Open' })).toHaveAttribute('href', '/custom-open');
    expect(screen.getByRole('link', { name: 'Back' })).toHaveAttribute('href', '/custom-back');
  });

  it('forwards ref, className, style, and other div props', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <Alert
        ref={ref}
        hasCloseAffordance={false}
        className='my-alert'
        data-testid='alert'
        style={{ marginTop: 2 }}
      >
        Alert message
      </Alert>
    );

    const alert = screen.getByTestId('alert');
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
    expect(container.querySelector('.my-alert')).toBe(alert);
    expect(alert).toHaveStyle({ marginTop: '2px' });
  });
});