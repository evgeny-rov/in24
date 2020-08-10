import { PanInfo } from 'framer-motion';

export default (refElement: any) => {
  const scrollHandler = (event: PointerEvent, info: PanInfo) => {
    const isMouseEvent = event.pointerType === 'mouse';
    const yDelta = info.delta.y;
    if (isMouseEvent) {
      return;
    } else if (yDelta < 0) {
      refElement.current.scrollTop += Math.abs(yDelta);
    } else if (yDelta > 0) {
      refElement.current.scrollTop -= yDelta;
    }
  };

  return scrollHandler;
};
