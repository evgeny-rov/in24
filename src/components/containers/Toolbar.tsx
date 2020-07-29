import React, { FunctionComponent } from 'react';

const Toolbar: FunctionComponent = ({ children }) => {
  return <div className="menu-nav menu-item">{children}</div>;
};

export default Toolbar;
