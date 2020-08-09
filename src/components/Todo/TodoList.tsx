import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { todosSelector } from '../../selectors';
import { StyledTodoList } from '../../styled/todo';
import isMobile from '../../utils/isMobile';

interface Props {
  todos: Array<Todo>;
}

const container: any = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

let prevTodosLength: number;

const TodoList: FunctionComponent<Props> = ({ todos }) => {
  const listRef: any = useRef(null);
  let clicked = false;

  useEffect(() => {
      if (prevTodosLength && prevTodosLength < todos.length) {
        listRef.current.scrollTop = listRef.current.scrollHeight;
      } else {
        prevTodosLength = todos.length;
      }
  }, [todos.length]);

  const customScrollFix = (e: any, info: any) => {
    const xThreshold = 20;
    const x = info.offset.x;
    const xEngaged = x > xThreshold;
    const yDelta = info.delta.y;
    if (yDelta < 0) {
      listRef.current.scrollTop += Math.abs(yDelta);
    } else if (yDelta > 0) {
      listRef.current.scrollTop -= yDelta;
    }

  } 

  return (
    <StyledTodoList
      ref={listRef}
      variants={container}
      initial="hidden"
      animate="show"
      onPan={customScrollFix}
      onMouseDown={() => (clicked = true)}
      onMouseUp={() => (clicked = false)}
    >
      {todos.map(({ id, text, isComplete }) => (
        <TodoItem key={id} id={id} text={text} isComplete={isComplete} />
      ))}
    </StyledTodoList>
  );
};

const mapStateToProps = (state: AppState) => ({ todos: todosSelector(state) });

export default connect(mapStateToProps)(TodoList);
