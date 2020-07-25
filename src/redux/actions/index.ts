import { ADD_TASK, TOGGLE_TASK, RESET_APP, REMOVE_TASK, ERASE_COMPLETE_TASKS } from './actionTypes';

export const addTask = (text: string) => ({
    type: ADD_TASK,
    payload: {
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

export const resetApp = () => ({
  type: RESET_APP,
});

export const removeTask = (id: number) => ({
  type: REMOVE_TASK,
  payload: {
    id,
  },
});

export const eraseCompleteTasks = () => ({
  type: ERASE_COMPLETE_TASKS,
})
