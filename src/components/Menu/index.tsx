import React from 'react';
import AddTask from './AddTask';
import Nav from './Nav';

export default () => {
  return (
    <div className="menu-container">
      <Nav />
      <AddTask />
    </div>
  );
};