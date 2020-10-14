import { omit, filter, pick } from 'lodash';
import {
  ADD_TODO,
  TOGGLE_TODO,
  RESET_APP,
  REMOVE_TODO,
  REMOVE_COMPLETE_TODOS,
  TOGGLE_COUNTDOWN,
} from '../actions/actionTypes';
import getNextDay from '../../utils/getNextDay';

const initialState: AppState = {
  todosById: {
    0: { id: 0, text: 'Make a to-do app just like everyone else', isComplete: true },
    1: { id: 1, text: 'Add third to-do', isComplete: false },
  },
  allIds: [0, 1],
  expires: getNextDay(),
  isCountdownDisabled: false,
};

export default (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { text, id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        todosById: {
          ...state.todosById,
          [id]: { id, text, isComplete: false },
        },
      };
    }
    case TOGGLE_TODO: {
      const { id, nextStatus } = action.payload;
      return {
        ...state,
        todosById: {
          ...state.todosById,
          [id]: { ...state.todosById[id], isComplete: nextStatus },
        },
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: filter(state.allIds, (itemId) => itemId !== id),
        todosById: omit(state.todosById, [id]),
      };
    }
    case REMOVE_COMPLETE_TODOS: {
      const { expires } = action.payload;
      const incompleteIds = filter(state.allIds, (id) => !state.todosById[id].isComplete);
      const incompletetodos = pick(state.todosById, [...incompleteIds]);
      return {
        ...state,
        allIds: incompleteIds,
        todosById: incompletetodos,
        expires,
      };
    }
    case RESET_APP: {
      const { expires } = action.payload;
      return {
        ...initialState,
        expires,
      };
    }
    case TOGGLE_COUNTDOWN: {
      return {
        ...state,
        isCountdownDisabled: !state.isCountdownDisabled,
      };
    }
    default: {
      return state;
    }
  }
};
