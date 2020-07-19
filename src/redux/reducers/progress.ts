import { ADD_TASK, TOGGLE_TASK, RESET_APP } from '../actions/actionTypes';

const DAY_IN_MS = 86399000;

const initialState: ProgressState = {
  total: 3,
  complete: 1,
  expires: Date.now() + DAY_IN_MS,
};

export default (state: ProgressState = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        total: state.total + 1,
      };
    case TOGGLE_TASK: 
      const { nextStatus } = action.payload;
      return {
        ...state,
        complete: nextStatus ? state.complete + 1 : state.complete - 1,
      };
    case RESET_APP:
      return {
        ...initialState,
        expires: Date.now() + DAY_IN_MS,
      };
    default:
      return state;
  }
};
