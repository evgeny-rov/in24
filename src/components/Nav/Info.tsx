import React, { useState } from 'react';
import { ReactComponent as InfoSVG } from '../../assets/info.svg';

// use css to show popup?
// would save a sheite load of unnecessary js

export default () => {
  const [showPopup, setShowPopup] = useState(false);

  const renderPopup = () => {
    return (
      <div className="info-popup">
        <span>Your todos will be reset in 24 hours</span>
        <span>Try to complete all of them in time!</span>
        <hr />
        <span>Click twice on the checkbox to remove todo</span>
        <span>Use eraser to remove all complete todos</span>
      </div>
    );
  }

  return (
    <div className="nav-info nav-item">
      {showPopup && renderPopup()}
      <InfoSVG 
        onMouseOver={() => setShowPopup(true)} 
        onMouseLeave={() => setShowPopup(false)}
      />
    </div>
  );
}