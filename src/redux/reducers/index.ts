import { ADD_TASK, TOGGLE_TASK, RESET_APP } from '../actions/actionTypes';
import getUniqueId from '../../utils/getUniqueId';

const ONE_DAY_IN_MS = 86400000;

const initialState: AppState = {
  tasksById: {
    0: { id: 0, text: 'Make a to-do app just like everyone else', isComplete: true },
    1: { id: 1, text: 'Add third task', isComplete: false },
  },
  allIds: [0, 1],
  expires: Date.now() + ONE_DAY_IN_MS,
};

export default (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TASK: 
      const { text } = action.payload;
      const id = getUniqueId(state.allIds);
      return {
        ...state,
        allIds: [...state.allIds, id],
        tasksById: {
          ...state.tasksById,
          [id]: { id, text, isComplete: false },
        },
      };
    case TOGGLE_TASK:
      const { id: toggleId, nextStatus } = action.payload;
      return {
        ...state,
        tasksById: {
          ...state.tasksById,
          [toggleId]: {...state.tasksById[toggleId], isComplete: nextStatus },
        },
      };
    case RESET_APP:
      localStorage.removeItem('state');
      return {
        ...initialState,
        expires: Date.now() + ONE_DAY_IN_MS,
      }
    default: 
      return state;
  }
};
