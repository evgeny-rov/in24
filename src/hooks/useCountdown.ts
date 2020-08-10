import { useState, useEffect } from 'react';

export default (amount: number, onTimeRanout: () => any) => {
  const [timeLeft, setTimeLeft] = useState(amount);

  useEffect(() => {
    if (timeLeft < 1000) {
      onTimeRanout();
    } else {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1000), 995);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft, onTimeRanout]);

  return timeLeft;
};
