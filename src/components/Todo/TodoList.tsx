import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { todosSelector } from '../../selectors';

interface Props {
  todos: Array<Todo>,
}

const TodoList: FunctionComponent<Props> = ({ todos }) => {
  const listRef: any = useRef(null);

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [todos.length])

  return (
    <ul ref={listRef} id="todo-list">
      {todos.map(({ id, text, isComplete}) => {
        return (<TodoItem key={id} id={id} text={text} isComplete={isComplete} />);
      })}
    </ul>
  );
}

const mapStateToProps = (state: AppState) => {
  return { todos: todosSelector(state) };
}

export default connect(mapStateToProps)(TodoList);
