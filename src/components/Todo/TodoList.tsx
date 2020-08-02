import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { todosSelector } from '../../selectors';
import { StyledTodoList } from '../../styled/todo';

interface Props {
  todos: Array<Todo>;
}

const container: any = {
  show: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const TodoList: FunctionComponent<Props> = ({ todos }) => {
  const listRef: any = useRef(null);

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [todos.length]);

  return (
    <StyledTodoList ref={listRef} variants={container} initial="hidden" animate="show">
      {todos.map(({ id, text, isComplete }) => (
        <TodoItem key={id} id={id} text={text} isComplete={isComplete} />
      ))}
    </StyledTodoList>
  );
};

const mapStateToProps = (state: AppState) => ({ todos: todosSelector(state) });

export default connect(mapStateToProps)(TodoList);
