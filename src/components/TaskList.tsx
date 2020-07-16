import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { Todo } from '../index';

interface props {
  tasks: Array<Todo.TaskInt>,
}

const TaskList = ({ tasks }: props) => {
  const listRef: any = useRef();

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [tasks.length])

  return (
    <ul ref={listRef} id="task-list">
      {tasks.map(({ id, text, isComplete}) => {
        return <Task key={id} id={id} text={text} isComplete={isComplete} />
      })}
    </ul>
  );
}

const mapStateToProps = (state: Todo.TaskStateInt) => {
  return { tasks: Object.values(state.todo.tasks) };
}

export default connect(mapStateToProps)(TaskList);
