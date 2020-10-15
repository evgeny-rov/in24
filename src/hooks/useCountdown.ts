import { useState, useEffect } from 'react';

export default (
  amount: number,
  onTimeRanout: Function,
  shouldReturnEarly: boolean = false
) => {
  const [timeLeft, setTimeLeft] = useState(amount);

  useEffect(() => {
    if (shouldReturnEarly) {
      return;
    } else if (timeLeft < 1000) {
      onTimeRanout();
    } else {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1000), 995);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft, onTimeRanout, shouldReturnEarly]);

  return timeLeft;
};
