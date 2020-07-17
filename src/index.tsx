import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './redux/store/store';

export declare namespace Todo {
  export interface TaskInt {
    id: number;
    text: string;
    isComplete: boolean;
  }

  export interface TaskStateInt {
    todo: {
      tasks: {
        [id: string]: TaskInt;
      },
      progress: {
        total: number;
        completeTasks: number;
      }
    }
  }

  export interface Action {
    type: string;
    payload: any;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
