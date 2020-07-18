import { ADD_TASK, TOGGLE_TASK } from './actionTypes';

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