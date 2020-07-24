import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import Countdown from './Countdown';
import { progressSelector } from '../../selectors';

interface Props {
  total: number;
  complete: number;
  expires: number;
}

const Progress: FunctionComponent<Props> = ({ total, complete, expires }) => {
  const isToDoComplete = total === complete;
  const completeClassName = isToDoComplete ? 'progress-context complete' : 'progress-context';
  const completeText = isToDoComplete ? 'Good job! Take a break or add new tasks' : `${complete}/${total}`;
  
  return (
    <div className="progress-container">
      <progress id="progress-status-bar" value={complete} max={total}></progress>
      <div className={completeClassName}>
        <Countdown key={expires} countAmount={expires - Date.now()}/>
        <span className="progress-context-count">{completeText}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(Progress);
