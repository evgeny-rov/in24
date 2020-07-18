import React from 'react';
import { connect } from 'react-redux';
import Countdown from './Countdown';

const CompletionStatus = ({ total, complete, expires }: ProgressState) => {
  const isToDoComplete = total === complete;
  const notifyContent = isToDoComplete ? '✓' : `${Math.floor((complete / total) * 100)}%`;
  const completeClassName = isToDoComplete ? ' complete' : '';
  
  return (
    <div className="completion-container">
      <progress id="progress-status" value={complete} max={total}></progress>
      <div className={`completion-notify${completeClassName}`}>{notifyContent}</div>
      <Countdown countAmount={expires - Date.now()}/>
    </div>
  );
}

const mapStateToProps = (state: AppState) => {
  return { ...state.progress };
}

export default connect(mapStateToProps)(CompletionStatus);
