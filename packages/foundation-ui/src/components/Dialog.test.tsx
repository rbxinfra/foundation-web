import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dialog, DialogBody, DialogContent, DialogTitle } from './Dialog';

describe('Dialog', () => {
  it('renders an open titled dialog and close affordance', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(<Dialog size='Medium' isModal open onOpenChange={onOpenChange} hasCloseAffordance closeLabel='Close'><DialogContent><DialogTitle>Title</DialogTitle><DialogBody>Body</DialogBody></DialogContent></Dialog>);
    expect(screen.getByRole('dialog', { name: 'Title' })).toHaveTextContent('Body');
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('does not render when closed and wires description semantics', () => {
    const { rerender } = render(<Dialog size='Small' isModal={false} open={false} hasDescription hasCloseAffordance={false} closeLabel='Close'><DialogContent><DialogTitle>Title</DialogTitle><DialogBody>Description body</DialogBody></DialogContent></Dialog>);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    rerender(<Dialog size='Small' isModal={false} open hasDescription hasCloseAffordance={false} closeLabel='Close'><DialogContent><DialogTitle>Title</DialogTitle><DialogBody>Description body</DialogBody></DialogContent></Dialog>);
    expect(screen.getByRole('dialog', { name: 'Title' })).toHaveTextContent('Description body');
  });
});