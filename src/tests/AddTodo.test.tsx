import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import AddTodo from '../components/Menu/AddTodo';
import createReduxTestProvider from '../setupTests';
import TodoList from '../components/Todo/TodoList';

const testStore: AppState = {
  allIds: [],
  todosById: {},
  expires: Infinity,
  isCountdownActive: false,
};

describe('User input', () => {
  beforeEach(() => {
    const ReduxProvider = createReduxTestProvider(testStore);
    render(
      <ReduxProvider>
        <AddTodo />
        <TodoList />
      </ReduxProvider>
    );
  });

  it('should allow to submit with atleast 2 typed characters', () => {
    expect(screen.getByRole('button')).toBeDisabled();
    userEvent.type(screen.getByRole('textbox'), 'a');
    expect(screen.getByRole('button')).toBeDisabled();
    userEvent.type(screen.getByRole('textbox'), 'ab');
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should add new todo', () => {
    const inputfield = screen.getByRole('textbox');
    const submitbtn = screen.getByRole('button');

    expect(screen.getByRole('list').children).toHaveLength(0);

    userEvent.type(inputfield, 'new todo');
    userEvent.click(submitbtn);

    expect(inputfield).toHaveValue('');
    expect(screen.getByRole('presentation')).toHaveTextContent('new todo');
    expect(screen.getByRole('list').children).toHaveLength(1);
  });

  it('should not add empty todo', () => {
    const inputfield = screen.getByRole('textbox');
    const submitbtn = screen.getByRole('button');

    userEvent.type(inputfield, '  ');

    userEvent.click(submitbtn);

    expect(screen.getByRole('list').children).toHaveLength(0);
  });
});
