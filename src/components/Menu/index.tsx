import React from 'react';
import AddTodo from './AddTodo';
import Nav from '../Nav';

export default () => {
  return (
    <div className="menu-container">
      <Nav />
      <AddTodo />
    </div>
  );
};