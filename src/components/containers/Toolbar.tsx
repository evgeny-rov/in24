import React, { FunctionComponent } from 'react';
import { StyledToolbar } from '../../styled/menu';

const Toolbar: FunctionComponent = ({ children }) => {
  return <StyledToolbar>{children}</StyledToolbar>;
};

export default Toolbar;
