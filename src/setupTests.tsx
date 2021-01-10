import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

const createReduxTestProvider = (initialState: AppState) => {
  const store = createStore(rootReducer, initialState);

  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return Wrapper;
};

export default createReduxTestProvider;
