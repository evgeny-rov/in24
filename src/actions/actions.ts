import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

let nextTodoId = 3;

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      text,
    }
});