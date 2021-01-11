import { PanInfo } from 'framer-motion';

export default (element: HTMLElement | null) => {
  if (!element) return;

  const scrollHandler = (event: PointerEvent, info: PanInfo) => {
    const isMouseEvent = event.pointerType === 'mouse';
    const yDelta = info.delta.y;
    if (isMouseEvent) {
      return;
    } else if (yDelta < 0) {
      element.scrollTop += Math.abs(yDelta);
    } else if (yDelta > 0) {
      element.scrollTop -= yDelta;
    }
  };

  return scrollHandler;
};
