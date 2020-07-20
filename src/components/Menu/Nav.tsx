import React from 'react';
import { ReactComponent as Info } from '../../info.svg';
import ResetWithConfirmation from './ResetWithConfirmation';

const Nav = () => {
  return (
    <div className="menu-nav menu-item">
      <Info />
      <ResetWithConfirmation />
    </div>
  );
}

export default Nav;