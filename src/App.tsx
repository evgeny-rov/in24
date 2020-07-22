import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Progress from './components/Progress';
import TaskList from './components/Todo/TaskList';

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <span className="background-logo">in24</span>
        <Progress />
        <TaskList />
        <Menu />
      </div>
    </div>
  );
}

export default App;
