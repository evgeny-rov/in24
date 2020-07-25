import React from 'react';
import Info from './Info';
import Reset from './Reset';
import Erase from './Erase';

const Nav = () => {
  return (
    <div className="menu-nav menu-item">
      <div className="action-btns-wrapper">
        <Reset />
        <Erase />
      </div>
      <Info />
    </div>
  );
}

export default Nav;