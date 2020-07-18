import { ADD_TASK, TOGGLE_TASK } from '../actions/actionTypes';
import getUniqueId from '../../utils/getUniqueId';

const initialState: TodoState = {
  tasks: {
    0: { id: 0, text: 'Dont make a to-do app just like everyone else', isComplete: true },
    1: { id: 1, text: 'Be a lazy ass', isComplete: false },
    2: { id: 2, text: 'Eat lots of sweets', isComplete: false },
  },
  allIds: [0, 1, 2],
};

export default (state: TodoState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TASK: 
      const { text } = action.payload;
      const id = getUniqueId(state.allIds);
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: { id, text, isComplete: false },
        },
        allIds: [...state.allIds, id],
      };
    case TOGGLE_TASK:
      const { id: toggleId, nextStatus } = action.payload;
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [toggleId]: {
            ...state.tasks[toggleId],
            isComplete: nextStatus,
          }
        },
      };
    default: 
      return state;
  }
};