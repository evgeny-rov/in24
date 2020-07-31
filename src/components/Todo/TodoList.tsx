import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { todosSelector } from '../../selectors';
import { TodoListStyled } from '../../styled/todo';

interface Props {
  todos: Array<Todo>;
}

const container: any = {
  hidden: { x: -100 },
  show: {
    x: 0,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const TodoList: FunctionComponent<Props> = ({ todos }) => {
  const listRef: any = useRef(null);

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [todos.length]);

  return (
    <TodoListStyled ref={listRef} variants={container} initial="hidden" animate="show">
      {todos.map(({ id, text, isComplete }) => (
        <TodoItem key={id} id={id} text={text} isComplete={isComplete} />
      ))}
    </TodoListStyled>
  );
};

const mapStateToProps = (state: AppState) => ({ todos: todosSelector(state) });

export default connect(mapStateToProps)(TodoList);
