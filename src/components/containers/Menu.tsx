import React, { FunctionComponent } from 'react';
import { MenuContainer } from '../../styled/menu';

const Menu: FunctionComponent = ({ children }) => {
  return <MenuContainer>{children}</MenuContainer>;
};

export default Menu;
