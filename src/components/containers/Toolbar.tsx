import React, { FunctionComponent } from 'react';
import { ToolbarStyled } from '../../styled/menu';

const Toolbar: FunctionComponent = ({ children }) => {
  return <ToolbarStyled>{children}</ToolbarStyled>;
};

export default Toolbar;
