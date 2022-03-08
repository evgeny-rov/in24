import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import createReduxTestProvider from '../setupTests';

const testStore: AppState = {
  allIds: [],
  todosById: {},
  expires: Infinity,
  isCountdownActive: false,
};

test('it should render app with translations', () => {
  const TestStoreProvider = createReduxTestProvider(testStore);
  render(
    <TestStoreProvider>
      <App />
    </TestStoreProvider>
  );

  expect(screen.getByRole('tooltip', { hidden: true })).toHaveTextContent(
    /your todos will be reset/i
  );
});

test('it should render bg logo', () => {
  const TestStoreProvider = createReduxTestProvider(testStore);
  render(
    <TestStoreProvider>
      <App />
    </TestStoreProvider>
  );

  expect(screen.getByText('in24')).toBeInTheDocument();
});

test('it should remove complete todos when countdown runs out', async () => {
  const testStore: AppState = {
    allIds: [0, 1],
    todosById: {
      0: { id: 0, text: 'poop', isComplete: false },
      1: { id: 1, text: 'poop2', isComplete: true },
    },
    expires: Date.now() + 2000,
    isCountdownActive: true,
  };
  const TestStoreProvider = createReduxTestProvider(testStore);

  const Component = () => (
    <TestStoreProvider>
      <App />
    </TestStoreProvider>
  );

  const { rerender } = render(<Component />);

  expect(screen.getByRole('list').children).toHaveLength(2);

  await act(async () => {
    await new Promise((res, rej) =>
      setTimeout(() => {
        rerender(<Component />);
        res('Ok');
      }, 2000)
    );
  });

  expect(screen.getByRole('list').children).toHaveLength(1);
});
