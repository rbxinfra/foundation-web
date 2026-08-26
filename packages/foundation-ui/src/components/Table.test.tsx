import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TablePagination, TableRow } from './Table';
import userEvent from '@testing-library/user-event';

describe('Table', () => {
  it('renders headers and cells', () => {
    render(<Table><TableHeader><TableRow><TableHeaderCell>Name</TableHeaderCell></TableRow></TableHeader><TableBody><TableRow><TableCell>Ada</TableCell></TableRow></TableBody></Table>);
    expect(screen.getByRole('columnheader', { name: 'Name' })).toBeInTheDocument();
    expect(screen.getByRole('cell', { name: 'Ada' })).toBeInTheDocument();
  });

  it('paginates rows and changes rows per page', async () => {
    const user = userEvent.setup();
    const onPageChange = jest.fn();
    const onRowsPerPageChange = jest.fn();
    render(<TablePagination page={0} rowsPerPage={10} totalRows={25} onPageChange={onPageChange} onRowsPerPageChange={onRowsPerPageChange} />);
    expect(screen.getByText('1-10 of 25')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Next page' }));
    expect(onPageChange).toHaveBeenCalledWith(1);
    await user.selectOptions(screen.getByRole('combobox', { name: 'Rows per page' }), '25');
    expect(onRowsPerPageChange).toHaveBeenCalledWith(25);
    expect(onPageChange).toHaveBeenCalledWith(0);
  });
});