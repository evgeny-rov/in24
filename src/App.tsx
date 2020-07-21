import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Status from './components/Status/CompletionStatus';
import TaskList from './components/Todo/TaskList';

function App() {
  return (
    <div className="App fs">
      <div className="todo-container">
        <Status />
        <TaskList />
        <Menu />
      </div>
    </div>
  );
}

export default App;
