import { useState } from 'react';

export default (allowedInterval: number = 500) => {
  const [lastClickedTimestamp, setTimestamp] = useState(0);

  return (handler: Function) => {
    if (Date.now() - lastClickedTimestamp < allowedInterval) {
      handler();
    } else {
      setTimestamp(Date.now());
    }
  };
}