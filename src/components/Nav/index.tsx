import React from 'react';
import Info from './Info';
import Modifiers from './Modifiers';

const Nav = () => {
  return (
    <div className="menu-nav menu-item">
      <Modifiers />
      <Info />
    </div>
  );
}

export default Nav;
