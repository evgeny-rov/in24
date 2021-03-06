import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers/index';

export const STATE_LOCAL_STORAGE_KEY = 'state';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE_LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    const parsedState: AppState = JSON.parse(serializedState);
    const isStateExpired =
      parsedState.isCountdownActive && parsedState.expires - Date.now() < 1000;

    return isStateExpired ? undefined : parsedState;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STATE_LOCAL_STORAGE_KEY, serializedState);
  } catch (err) {
    // ignore
  }
};

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
