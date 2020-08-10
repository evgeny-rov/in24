import { useRef, useEffect } from 'react';

export default <T>(value: T): T => {
  const ref: any = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
