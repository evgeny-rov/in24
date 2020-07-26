import { ADD_TASK, TOGGLE_TASK, RESET_APP, REMOVE_TASK, REMOVE_COMPLETE_TASKS } from '../actions/actionTypes';
import getNextDay from '../../utils/getNextDay';
import { omit, filter, pick } from 'lodash';

const initialState: AppState = {
  tasksById: {
    0: { id: 0, text: 'Make a to-do app just like everyone else', isComplete: true },
    1: { id: 1, text: 'Add third task', isComplete: false },
  },
  allIds: [0, 1],
  expires: getNextDay(),
};

export default (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TASK: 
      const { text, id } = action.payload;
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
    case REMOVE_TASK: 
      const { id: removeId } = action.payload;
      return {
        ...state,
        allIds: filter(state.allIds, (id) => id !== removeId),
        tasksById: omit(state.tasksById, [removeId]),
      };
    case REMOVE_COMPLETE_TASKS:
      const incompleteIds = filter(state.allIds, (id) => !state.tasksById[id].isComplete);
      const incompleteTasks = pick(state.tasksById, [...incompleteIds]);
      return {
        ...state,
        allIds: incompleteIds,
        tasksById: incompleteTasks,
      };
    case RESET_APP:
      const { expires } = action.payload;
      return {
        ...initialState,
        expires,
      };
    default: 
      return state;
  }
};
