import React, { useRef, useEffect, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { tasksSelector } from '../../selectors';

interface Props {
  tasks: Array<Task>,
}

const TaskList: FunctionComponent<Props> = ({ tasks }) => {
  const listRef: any = useRef(null);

  useEffect(() => {
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [tasks.length])

  return (
    <ul ref={listRef} id="task-list">
      {tasks.map(({ id, text, isComplete}) => {
        return (<TaskItem key={id} id={id} text={text} isComplete={isComplete} />);
      })}
    </ul>
  );
}

const mapStateToProps = (state: AppState) => {
  return { tasks: tasksSelector(state) };
}

export default connect(mapStateToProps)(TaskList);
