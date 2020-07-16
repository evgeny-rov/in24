import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  tasks: {
    0: { id: 0, text: 'Dont make a to-do app just like everyone else', isComplete: true },
    1: { id: 1, text: 'Be an lazy ass', isComplete: false },
    2: { id: 2, text: 'Eat a lot of sweets', isComplete: false },
  },
  progress: {
    total: 3,
    completeTasks: 1,
  }
};

const rootReducer = (state: any = initialState, action: any) => {
  switch(action.type) {
    case 'ADD_TASK': 
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
    case 'TOGGLE_TASK':
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
