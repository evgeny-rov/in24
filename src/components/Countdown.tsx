import React, { useState, useEffect } from 'react';

interface Props {
  countAmount: number;
}

export default ({ countAmount }: Props) => {
  const [time, setTime] = useState(countAmount);

  useEffect(() => {
    const timerId = setInterval(() => setTime(time - 1000), 1000);
    return () => clearInterval(timerId);
  }, [time]);

  return (
    <span className="timer">{new Date(time).toUTCString().slice(-12, -3)}</span>
  );
}
