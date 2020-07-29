import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../../selectors';

interface Props {
  total: number;
  complete: number;
}

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  return <progress id="progress-status-bar" value={complete} max={total} />;
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
