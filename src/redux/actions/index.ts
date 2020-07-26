import { ADD_TASK, TOGGLE_TASK, RESET_APP, REMOVE_TASK, REMOVE_COMPLETE_TASKS } from './actionTypes';
import getNextDay from '../../utils/getNextDay';

export const addTask = (text: string) => ({
    type: ADD_TASK,
    payload: {
      id: Date.now(),
      text,
    },
});

export const toggleTask = (id: number, nextStatus: boolean) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
    nextStatus
  },
});

export const resetApp = () => {
  localStorage.removeItem('state');
  return {
    type: RESET_APP,
    payload: {
      expires: getNextDay(), 
    },
  }
};

export const removeTask = (id: number) => ({
  type: REMOVE_TASK,
  payload: {
    id,
  },
});

export const removeCompleteTasks = () => ({
  type: REMOVE_COMPLETE_TASKS,
})
