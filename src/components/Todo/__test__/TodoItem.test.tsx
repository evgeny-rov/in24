import React from 'react';
import {
  fireEvent,
  render,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import createReduxTestProvider from '../../../setupTests';
import TodoList from '../../Todo/TodoList';

beforeEach(() => {
  const testStore: AppState = {
    allIds: [0],
    todosById: { 0: { id: 0, text: 'hello', isComplete: false } },
    expires: Infinity,
    isCountdownActive: false,
  };

  const TestStoreProvider = createReduxTestProvider(testStore);

  render(
    <TestStoreProvider>
      <TodoList />
    </TestStoreProvider>
  );
});

test('it should change completion status on click', () => {
  expect(screen.getByRole('checkbox').firstChild).toHaveStyle(
    'visibility: hidden;'
  );
  expect(screen.getByRole('presentation')).toHaveStyle(
    'text-decoration: none;'
  );

  userEvent.click(screen.getByRole('presentation'));

  expect(screen.getByRole('checkbox').firstChild).toHaveStyle(
    'visibility: visible;'
  );
  expect(screen.getByRole('presentation')).toHaveStyle(
    'text-decoration: line-through;'
  );
});

test('it can be removed by double click on the checkbox', () => {
  expect(screen.getAllByRole('presentation')).toHaveLength(1);

  userEvent.dblClick(screen.getByRole('checkbox'));

  expect(screen.getByRole('list').children).toHaveLength(0);
});

test('it can be removed by dragging right', () => {
  expect('item to be removed').not.toEqual('but i do not know how to test it');
});
