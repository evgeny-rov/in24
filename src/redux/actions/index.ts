import {
  ADD_TODO,
  TOGGLE_TODO,
  RESET_APP,
  REMOVE_TODO,
  REMOVE_COMPLETE_TODOS,
} from './actionTypes';
import getNextDay from '../../utils/getNextDay';
import { STATE_LOCAL_STORAGE_KEY } from '../store';

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
  },
});

export const toggleTodo = (id: number, nextStatus: boolean) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
    nextStatus,
  },
});

export const resetApp = () => {
  localStorage.removeItem(STATE_LOCAL_STORAGE_KEY);
  return {
    type: RESET_APP,
    payload: {
      expires: getNextDay(),
    },
  };
};

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const removeCompleteTodos = () => ({
  type: REMOVE_COMPLETE_TODOS,
});
