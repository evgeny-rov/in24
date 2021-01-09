import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '../i18n';
import createReduxTestProvider from '../setupTests';
import ProgressBar from '../components/Status/ProgressBar';
import TodoList from '../components/Todo/TodoList';
import ProgressContext from '../components/Status/ProgressContext';
import Countdown from '../components/Status/Countdown';

const testStore: AppState = {
  allIds: [0],
  todosById: { 0: { id: 0, text: 'hey', isComplete: false } },
  expires: Infinity,
  isCountdownActive: false,
};

describe('Status', () => {
  describe('Progress bar', () => {
    it('should be empty', () => {
      const TestStoreProvider = createReduxTestProvider(testStore);
      render(
        <TestStoreProvider>
          <ProgressBar />
        </TestStoreProvider>
      );

      expect(screen.getByRole('progressbar')).toHaveStyle('width: 0%;');
    });

    it('should adjust size on changed todo status', () => {
      const TestStoreProvider = createReduxTestProvider(testStore);
      render(
        <TestStoreProvider>
          <ProgressBar />
          <TodoList />
        </TestStoreProvider>
      );

      expect(screen.getByRole('progressbar')).toHaveStyle('width: 0%;');
      userEvent.click(screen.getByRole('presentation'));
      expect(screen.getByRole('progressbar')).toHaveStyle('width: 100%;');
    });
  });

  describe('Progress context', () => {
    it('should indicate current progress', () => {
      const TestStoreProvider = createReduxTestProvider(testStore);
      render(
        <TestStoreProvider>
          <ProgressContext />
        </TestStoreProvider>
      );

      expect(screen.getByTestId('context')).toHaveTextContent('0/1');
    });

    it('should display completion message', () => {
      const TestStoreProvider = createReduxTestProvider(testStore);
      render(
        <TestStoreProvider>
          <ProgressContext />
          <TodoList />
        </TestStoreProvider>
      );

      expect(screen.getByTestId('context')).toHaveTextContent('0/1');
      userEvent.click(screen.getByRole('presentation'));
      expect(screen.getByTestId('context')).toHaveTextContent(/good job/i);
    });

    it('should display empty message', () => {
      const TestStoreProvider = createReduxTestProvider(testStore);
      render(
        <TestStoreProvider>
          <ProgressContext />
          <TodoList />
        </TestStoreProvider>
      );

      expect(screen.getByTestId('context')).toHaveTextContent('0/1');
      userEvent.dblClick(screen.getByRole('checkbox'));
      expect(screen.getByTestId('context')).toHaveTextContent(
        /add some todos/i
      );
    });
  });

  describe('Countdown', () => {
    it('should be disabled', () => {
      const TestStoreProvider = createReduxTestProvider(testStore);
      render(
        <TestStoreProvider>
          <Countdown />
        </TestStoreProvider>
      );
      expect(screen.getByRole('button')).toHaveTextContent(/00:00:00/i);
      expect(screen.getByRole('button')).toHaveStyle(
        'text-decoration: line-through;'
      );
    });

    it('should be enabled on click', () => {
      const TestStoreProvider = createReduxTestProvider(testStore);
      render(
        <TestStoreProvider>
          <Countdown />
        </TestStoreProvider>
      );

      userEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('button')).not.toHaveStyle(
        'text-decoration: line-through;'
      );
    });

    it('should countdown 24 hours', async () => {
      const testStore: AppState = {
        allIds: [],
        todosById: {},
        expires: Date.now() + 86400000,
        isCountdownActive: true,
      };
      const TestStoreProvider = createReduxTestProvider(testStore);

      const Component = () => (
        <TestStoreProvider>
          <Countdown />
        </TestStoreProvider>
      );

      const { rerender } = render(<Component />);
      const initialCountdownValue = screen.getByRole('button').textContent;

      await act(async () => {
        await new Promise((res, rej) =>
          setTimeout(() => {
            rerender(<Component />);
            res('Ok');
          }, 1000)
        );
      });

      expect(screen.getByRole('button').textContent).toHaveLength(8);
      expect(screen.getByRole('button').textContent).not.toEqual(
        initialCountdownValue
      );
    });
  });
});
