import { ADD_TASK, TOGGLE_TASK, RESET_APP } from './actionTypes';

export const addTask = (text: string) => ({
    type: ADD_TASK,
    payload: {
      text,
    }
});

export const toggleTask = (id: number, nextStatus: boolean) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
    nextStatus
  }
});

export const resetApp = () => ({
  type: RESET_APP,
});