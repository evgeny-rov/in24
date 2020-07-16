import React from 'react';
import { connect } from 'react-redux';

interface StateProps {
  progress: {
    total: number,
    completeTasks: number,
  }
}

const CompletionStatus = ({ progress: { completeTasks, total } }: StateProps) => {
  const content = total === completeTasks ? '✓' : `${Math.floor((completeTasks / total) * 100)}%`

  return (
    <div className="completion-container">
      <progress id="progress-status" value={completeTasks} max={total}></progress>
      <div className="complete-notify">{content}</div>
    </div>
  );
}

const mapStateToProps = (state: StateProps) => {
  return { progress: state.progress };
}

export default connect(mapStateToProps)(CompletionStatus);