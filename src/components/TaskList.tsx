import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';

interface Props {
  tasks: Array<Task>,
}

const TaskList = ({ tasks }: Props) => {
  const listRef: any = useRef(null);

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [tasks.length])

  return (
    <ul ref={listRef} id="task-list">
      {tasks.map(({ id, text, isComplete}) => {
        return <TaskItem key={id} id={id} text={text} isComplete={isComplete} />
      })}
    </ul>
  );
}

const mapStateToProps = (state: AppState) => {
  return { tasks: state.todo.allIds.map((id) => state.todo.tasks[id]) };
}

export default connect(mapStateToProps)(TaskList);
