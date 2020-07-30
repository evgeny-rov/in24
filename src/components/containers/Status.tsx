import React, { FunctionComponent } from 'react';
import { StatusContainer } from '../../styled/status';

const Status: FunctionComponent = ({ children }) => {
  return <StatusContainer>{children}</StatusContainer>;
};

export default Status;
