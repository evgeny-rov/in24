import React from 'react';
import sync from 'framesync';
import { act } from 'react-dom/test-utils';
import { fireEvent } from '@testing-library/dom';
import { MotionConfig } from 'framer-motion';

export type Point = {
  x: number;
  y: number;
};

const pos: Point = {
  x: 0,
  y: 0,
};

export const frame = {
  postRender: () => new Promise((resolve) => sync.postRender(resolve)),
};

export const drag = (element: any, triggerElement?: any) => {
  pos.x = 0;
  pos.y = 0;
  fireEvent.mouseDown(triggerElement || element);

  const controls = {
    to: async (x: number, y: number) => {
      pos.x = x;
      pos.y = y;

      await act(async () => {
        fireEvent.mouseMove(document.body, { buttons: 1 });
        await frame.postRender();
      });

      return controls;
    },
    end: () => {
      fireEvent.mouseUp(element);
    },
  };

  return controls;
};

export const MockDrag: React.FC = ({ children }) => (
  <MotionConfig transformPagePoint={() => pos}>{children}</MotionConfig>
)