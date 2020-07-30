import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../../selectors';
import { ProgressBarStyled } from '../../styled/status';

interface Props {
  total: number;
  complete: number;
}

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  return <ProgressBarStyled value={complete} max={total} />;
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
