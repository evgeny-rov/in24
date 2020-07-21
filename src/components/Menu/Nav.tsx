import React from 'react';
import Info from './Info';
import Restore from './Restore';

const Nav = () => {
  return (
    <div className="menu-nav menu-item">
      <Info />
      <Restore />
    </div>
  );
}

export default Nav;