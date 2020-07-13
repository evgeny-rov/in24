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
    { id: 0, text: 'this is your first task' },
    { id: 1, text: 'this is your second task' },
  ],
  completeTasksIds: [1],
};

const rootReducer = (state: any = initialState, action: any) => {
  switch(action.type) {
    case 'ADD_TASK': 
      const { text } = action.payload;
      const { tasks } = state;
      const newState = {
        ...state,
        tasks: [
          ...tasks,
          { id: tasks.length, text },
        ],
      };
      return newState;
      break;
    case 'TOGGLE_TASK':
      const { id } = action.payload;
      const { completeTasksIds } = state;
      const isTaskComplete = completeTasksIds.includes(id);
      const newCompleteIds = isTaskComplete 
        ? completeTasksIds.filter((taskId: number) => taskId !== id)
        : [...completeTasksIds, id];

      console.log(isTaskComplete, newCompleteIds)
      const newState2 = {
        ...state,
        completeTasksIds: newCompleteIds,
      }
      return newState2;
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
