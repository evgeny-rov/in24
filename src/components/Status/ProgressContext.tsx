import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../../selectors';

interface Props {
  total: number;
  complete: number;
}

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  return (
    <span className="progress-context-count">{`${complete}/${total}`}</span>
  );
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
