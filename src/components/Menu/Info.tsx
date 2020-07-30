import React from 'react';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';
import { StyledToolTip, StyledInfoWrapper } from '../../styled/menu';

export default () => {
  return (
    <StyledInfoWrapper>
      <StyledToolTip>
        <span>Your todos will be reset in 24 hours.</span>
        <span>Try to complete all of them in time!</span>
        <hr />
        <span>Click twice on the checkbox to remove todo.</span>
        <span>Use eraser to remove all complete todos.</span>
      </StyledToolTip>
      <InfoSVG />
    </StyledInfoWrapper>
  );
};
