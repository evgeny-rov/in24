import { createStore } from 'redux';
import combinedReducers from '../reducers/index';
import throttle from 'lodash/throttle';

const resetState = () => {
  localStorage.clear();
}

const checkDateForExpiration = (expirationDate: number): boolean => {
  const isStateExpired = expirationDate - Date.now() < 1000;
  if (isStateExpired) resetState();
  return isStateExpired;
}

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined
    }
      
    const parsedState = JSON.parse(serializedState);
    const isStateExpired = checkDateForExpiration(parsedState.progress.expires);
    return isStateExpired ? undefined : parsedState;
  } catch (err) {
    return undefined;
  }
};

const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // ignore
  }
};

const persistedState = loadState();

const store = createStore(combinedReducers, persistedState);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

export default store;