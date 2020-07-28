import React, { useState, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';

interface Props {
  countAmount: number;
  resetApp: () => Action;
}

const CountDown: FunctionComponent<Props> = ({ countAmount, resetApp }) => {
  const [time, setTime] = useState(countAmount);

  useEffect(() => {
    if (time < 1000) {
      resetApp();
    } else {
      const timerId = setTimeout(() => setTime(time - 1000), 995);
      return () => clearTimeout(timerId);
    }
  }, [time, resetApp]);

  return (
    <span className="countdown">{new Date(time).toUTCString().slice(-12, -4)}</span>
  );
};

export default connect(null, { resetApp })(CountDown);
