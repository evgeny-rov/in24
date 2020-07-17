import { ADD_TASK, TOGGLE_TASK } from './actionTypes';

let nextTodoId = 2;

export const addTask = (text: string) => ({
    type: ADD_TASK,
    payload: {
      id: ++nextTodoId,
      text,
    }
});

export const toggleTask = (id: number) => ({
  type: TOGGLE_TASK,
  payload: {
    id
  }
});