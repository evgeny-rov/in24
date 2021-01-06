import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import createReduxTestProvider from '../../../setupTests';
import TodoList from '../../Todo/TodoList';
import AppReset from '../AppReset';
import '../../../i18n';
import Info from '../Info';
import Recycle from '../Recycle';

describe('Toolbar', () => {
  beforeEach(() => {
    const testStore: AppState = {
      allIds: [0, 1],
      todosById: {
        0: { id: 0, text: 'new todo', isComplete: false },
        1: { id: 1, text: 'another todo', isComplete: true },
      },
      expires: Infinity,
      isCountdownActive: false,
    };

    const ReduxProvider = createReduxTestProvider(testStore);
    render(
      <ReduxProvider>
        <AppReset />
        <TodoList />
        <Info />
        <Recycle />
      </ReduxProvider>
    );
  });

  describe('App reset', () => {
    it('should render reset confirmation on click', () => {
      render(<div id="modal-root"></div>);
      userEvent.click(screen.getByTitle('Reset Progress'));
      expect(
        screen.getByText(/reset all of your progress/i)
      ).toBeInTheDocument();
    });

    it('should not reset app on decline', () => {
      render(<div id="modal-root"></div>);
      expect(screen.getByRole('list').children).toHaveLength(2);
      userEvent.click(screen.getByTitle('Reset Progress'));
      userEvent.click(screen.getByText('No'));
      expect(screen.getByRole('list').children).toHaveLength(2);
    });

    it('should reset app on accept', () => {
      render(<div id="modal-root"></div>);
      expect(screen.getByRole('list').children).toHaveLength(2);
      userEvent.click(screen.getByTitle('Reset Progress'));
      userEvent.click(screen.getByText('Yes'));
      expect(screen.getByRole('list').children).toHaveLength(0);
    });
  });

  describe('Info', () => {
    it('should display tooltip on hover', async () => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      fireEvent.mouseOver(screen.getByTitle('Info'));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      fireEvent.mouseOut(screen.getByTitle('Info'));
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  describe('Recycle', () => {
    it('should remove complete todos', () => {
      expect(screen.getAllByRole('presentation')).toHaveLength(2);
      expect(screen.getByText('another todo')).toBeInTheDocument();

      userEvent.click(screen.getByTitle(/recycle progress/i));

      expect(screen.getAllByRole('presentation')).toHaveLength(1);
      expect(screen.queryByText('another todo')).not.toBeInTheDocument();
    })
  });
});
