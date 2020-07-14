import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const actionTypes = {
  ADD_TASK: 'ADD_TASK',
  TOGGLE_TASK: 'TOGGLE_TASK',
}

const initialState = {
  tasks: [
    { id: 0, text: 'this is your first task', complete: false },
    { id: 1, text: 'this is your second task', complete: false },
    { id: 2, text: 'this is your third complete task', complete: true },
  ],
};

const rootReducer = (state: any = initialState, action: any) => {
  switch(action.type) {
    case 'ADD_TODO': 
      console.log('task added', action)
      return state;
    case 'TOGGLE_TASK':
      return state;
    default: 
      return state;
    
  }
};

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
