import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Progress from './components/Progress';
import TodoList from './components/Todo/TodoList';

function App() {
  return (
    <div className="App">
      <div className="todo-list-container">
        <span className="background-logo">in24</span>
        <Progress />
        <TodoList />
        <Menu />
      </div>
    </div>
  );
}

export default App;
