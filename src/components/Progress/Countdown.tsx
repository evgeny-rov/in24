import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';

interface Props {
  countAmount: number;
  resetApp: () => {};
}

const CountDown = ({ countAmount, resetApp }: Props) => {
  const [time, setTime] = useState(countAmount);
  
  useEffect(() => {
    if (time < 1000) {
      resetApp()
    } else {
      const intervalId = setInterval(() => setTime(time - 1000), 1000);
      return () => clearInterval(intervalId);
    }
  }, [time, resetApp]);

  return (
    <span className="countdown">{new Date(time).toUTCString().slice(-12, -4)}</span>
  );
}

export default connect(null, { resetApp })(CountDown);