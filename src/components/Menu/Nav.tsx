import React from 'react';
import Info from './Info';
import Restore from './Restore';

const Nav = () => {
  return (
    <div className="menu-nav menu-item">
      <Restore />
      <Info />
    </div>
  );
}

export default Nav;