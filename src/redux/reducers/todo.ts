import { ADD_TASK, TOGGLE_TASK } from '../actions/actionTypes';
import { Todo } from '../../types';

const initialState = {
  tasks: {
    0: { id: 0, text: 'Dont make a to-do app just like everyone else', isComplete: true },
    1: { id: 1, text: 'Be a lazy ass', isComplete: false },
    2: { id: 2, text: 'Eat lots of sweets', isComplete: false },
  },
  progress: {
    total: 3,
    completeTasks: 1,
  }
};

interface initialState {
  tasks: {
    [id: number]: Todo.TaskInt;
  },
  progress: {
    total: number;
    completeTasks: number;
  }
}

export default (state: initialState = initialState, action: Todo.Action) => {
  switch(action.type) {
    case ADD_TASK: 
      const { id: addId, text } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [addId]: { id: addId, text, isComplete: false },
        },
        progress: {
          ...state.progress,
          total: state.progress.total += 1,
        }
      };
    case TOGGLE_TASK:
      const { id: toggleId } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [toggleId]: {
            ...state.tasks[toggleId],
            isComplete: !state.tasks[toggleId].isComplete,
          }
        },
        progress: {
          ...state.progress,
          completeTasks: state.tasks[toggleId].isComplete ? state.progress.completeTasks -= 1 : state.progress.completeTasks += 1,
        }
      };
    default: 
      return state;
  }
};