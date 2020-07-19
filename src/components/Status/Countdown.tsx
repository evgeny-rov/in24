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
    const timerId = setInterval(() => setTime(time - 1000), 1000);
    return () => clearInterval(timerId);
  }, [time]);

  return (
    <>
      <span className="timer">{new Date(time).toUTCString().slice(-12, -4)}</span>
      <input type="button" value="xxx" onClick={resetApp}/>
    </>
  );
}

export default connect(null, { resetApp })(CountDown);