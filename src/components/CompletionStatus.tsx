import React from 'react';
import { connect } from 'react-redux';
import { Todo } from '../index';

interface Props {
  progress: {
    total: number,
    completeTasks: number,
  }
}

const CompletionStatus = ({ progress: { completeTasks, total } }: Props) => {
  const isToDoComplete = total === completeTasks;
  const notifyContent = isToDoComplete ? '✓' : `${Math.floor((completeTasks / total) * 100)}%`;
  const completeClassName = isToDoComplete ? ' complete' : '';
  
  return (
    <div className="completion-container">
      <progress id="progress-status" value={completeTasks} max={total}></progress>
      <div className={`completion-notify${completeClassName}`}>{notifyContent}</div>
    </div>
  );
}

const mapStateToProps = (state: Todo.TaskStateInt) => {
  return { progress: state.todo.progress };
}

export default connect(mapStateToProps)(CompletionStatus);