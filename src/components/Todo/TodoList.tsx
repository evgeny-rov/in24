import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { todosSelector } from '../../selectors';
import { StyledTodoList } from '../../styled/todo';
import useFramerMobileScrollFix from '../../hooks/useFramerMobileScrollFix';
import usePrevious from '../../hooks/usePrevious';

interface Props {
  todos: Array<Todo>;
}

const animsContainer = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TodoList: FunctionComponent<Props> = ({ todos }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const scrollFixHandler = useFramerMobileScrollFix(listRef.current);
  const previousTodosLength = usePrevious(todos.length);

  useEffect(() => {
    if (listRef.current && todos.length > previousTodosLength) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos.length, previousTodosLength]);

  return (
    <StyledTodoList
      ref={listRef}
      variants={animsContainer}
      initial="hidden"
      animate="show"
      onPan={scrollFixHandler}
    >
      {todos.map(({ id, text, isComplete }) => (
        <TodoItem key={id} id={id} text={text} isComplete={isComplete} />
      ))}
    </StyledTodoList>
  );
};

const mapStateToProps = (state: AppState) => ({ todos: todosSelector(state) });

export default connect(mapStateToProps)(TodoList);
