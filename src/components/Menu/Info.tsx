import React from 'react';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';

export default () => {
  return (
    <div className="nav-info nav-item">
      <div className="info-tooltip">
        <span>Your todos will be reset in 24 hours</span>
        <span>Try to complete all of them in time!</span>
        <hr />
        <span>Click twice on the checkbox to remove todo</span>
        <span>Use eraser to remove all complete todos</span>
      </div>
      <InfoSVG />
    </div>
  );
};
