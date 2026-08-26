import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Autocomplete, AutocompleteOption } from './Autocomplete';

function Options() {
  return (
    <>
      <AutocompleteOption value='one' title='One' description='First option' />
      <AutocompleteOption value='two' title='Two' />
      <AutocompleteOption value='three' title='Three' />
    </>
  );
}

describe('Autocomplete', () => {
  it('renders a labelled combobox with required and placeholder states', () => {
    render(
      <Autocomplete
        id='fruit'
        label='Fruit'
        isRequired
        placeholder='Choose a fruit'
      />
    );

    const input = screen.getByRole('combobox', { name: 'Fruit *' });
    expect(input).toHaveAttribute('id', 'fruit');
    expect(input).toHaveAttribute('placeholder', 'Choose a fruit');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAttribute('aria-controls', 'fruit-listbox');
  });

  it('opens suggestions on focus and renders options in a listbox', async () => {
    const user = userEvent.setup();
    render(
      <Autocomplete label='Suggestions' listboxAriaLabel='Fruit options'>
        <Options />
      </Autocomplete>
    );

    const input = screen.getByRole('combobox', { name: 'Suggestions' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    await user.click(input);

    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('listbox', { name: 'Fruit options' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /One First option/ })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Two' })).toBeInTheDocument();
  });

  it('opens and reports input changes', async () => {
    const user = userEvent.setup();
    const onInputValueChange = jest.fn();
    render(
      <Autocomplete onInputValueChange={onInputValueChange}>
        <Options />
      </Autocomplete>
    );

    const input = screen.getByRole('combobox');
    await user.type(input, 'tw');

    expect(input).toHaveValue('tw');
    expect(onInputValueChange).toHaveBeenLastCalledWith('tw');
    expect(input).toHaveAttribute('aria-expanded', 'true');
  });

  it('selects a single option and closes the suggestions', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    const onOpenChange = jest.fn();
    render(
      <Autocomplete onValueChange={onValueChange} onOpenChange={onOpenChange}>
        <Options />
      </Autocomplete>
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.click(screen.getByRole('option', { name: 'Two' }));

    expect(onValueChange).toHaveBeenCalledWith('two');
    expect(input).toHaveValue('two');
    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it('supports keyboard highlighting and selection', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(
      <Autocomplete onValueChange={onValueChange}>
        <Options />
      </Autocomplete>
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.keyboard('{ArrowDown}');

    const firstOption = screen.getByRole('option', { name: /One First option/ });
    expect(firstOption).toHaveAttribute('data-highlighted', 'true');
    expect(input).toHaveAttribute('aria-activedescendant', firstOption.id);

    await user.keyboard('{Enter}');

    expect(onValueChange).toHaveBeenCalledWith('one');
    expect(input).toHaveValue('one');
  });

  it('closes suggestions with Escape without selecting an option', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(
      <Autocomplete onValueChange={onValueChange}>
        <Options />
      </Autocomplete>
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.keyboard('{ArrowDown}{Escape}');

    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it('renders an empty state when no options are provided', async () => {
    const user = userEvent.setup();
    render(<Autocomplete emptyState='Nothing found' />);

    await user.click(screen.getByRole('combobox'));

    expect(screen.getByRole('listbox', { name: 'Suggestions' })).toHaveTextContent('Nothing found');
  });

  it('renders helper and error text with described-by semantics', () => {
    render(<Autocomplete label='Fruit' error='Fruit is unavailable' />);

    const input = screen.getByRole('combobox', { name: 'Fruit' });
    const helper = screen.getByText('Fruit is unavailable');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', helper.id);
    expect(helper).toHaveClass('content-system-alert');
  });

  it('does not open when disabled', async () => {
    const user = userEvent.setup();
    const onOpenChange = jest.fn();
    render(
      <Autocomplete isDisabled onOpenChange={onOpenChange}>
        <Options />
      </Autocomplete>
    );

    const input = screen.getByRole('combobox');
    expect(input).toBeDisabled();
    await user.click(input);

    expect(input).toHaveAttribute('aria-expanded', 'false');
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('supports controlled input and open state', async () => {
    const user = userEvent.setup();
    const onInputValueChange = jest.fn();
    const onOpenChange = jest.fn();
    const { rerender } = render(
      <Autocomplete inputValue='initial' open onInputValueChange={onInputValueChange} onOpenChange={onOpenChange}>
        <Options />
      </Autocomplete>
    );
    const input = screen.getByRole('combobox');
    expect(input).toHaveValue('initial');
    expect(input).toHaveAttribute('aria-expanded', 'true');
    await user.type(input, 'x');
    expect(onInputValueChange).toHaveBeenCalledWith('initialx');

    rerender(<Autocomplete inputValue='updated' open onInputValueChange={onInputValueChange}><Options /></Autocomplete>);
    expect(input).toHaveValue('updated');
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it('skips disabled options during keyboard navigation', async () => {
    const user = userEvent.setup();
    render(
      <Autocomplete>
        <AutocompleteOption value='disabled' title='Disabled' disabled />
        <AutocompleteOption value='enabled' title='Enabled' />
      </Autocomplete>
    );
    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.keyboard('{ArrowDown}');
    expect(input).toHaveAttribute('aria-activedescendant', expect.stringContaining('enabled'));
  });

  it('supports multi-select and removing selected values', async () => {
    const user = userEvent.setup();
    const onValueChange = jest.fn();
    render(
      <Autocomplete multiple defaultValue={['one']} onValueChange={onValueChange}>
        <Options />
      </Autocomplete>
    );

    const input = screen.getByRole('combobox');
    await user.click(input);
    await user.click(screen.getByRole('option', { name: 'Two' }));

    expect(onValueChange).toHaveBeenCalledWith(['one', 'two']);
    expect(screen.getByTestId('autocomplete-selected-value-one')).toBeInTheDocument();
    expect(screen.getByTestId('autocomplete-selected-value-two')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-expanded', 'true');

    await user.click(screen.getByRole('button', { name: 'Remove One' }));

    expect(onValueChange).toHaveBeenLastCalledWith(['two']);
    expect(screen.queryByTestId('autocomplete-selected-value-one')).not.toBeInTheDocument();
  });

  it('forwards ref, className, leading content, and input props', () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <Autocomplete
        ref={ref}
        className='my-autocomplete'
        leadingIconNode={<span data-testid='leading-content'>Icon</span>}
        data-testid='autocomplete'
      />
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(screen.getByTestId('leading-content')).toBeInTheDocument();
    expect(screen.getByTestId('autocomplete')).toBeInTheDocument();
    expect(container.querySelector('.my-autocomplete')).toBeInTheDocument();
  });
});