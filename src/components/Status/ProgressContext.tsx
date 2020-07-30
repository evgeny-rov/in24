import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../../selectors';
import { ProgressContextStyled } from '../../styled/status';

interface Props {
  total: number;
  complete: number;
}

const getContextByProgress = (total: number, complete: number) => {
  if (total < 1) {
    return 'Add some todos';
  } else if (total - complete === 0) {
    return 'Great job! Take a break or add new todos';
  }
  return `${complete}/${total}`;
}

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  return (
    <ProgressContextStyled
      complete={total - complete === 0}
    >{getContextByProgress(total, complete)}</ProgressContextStyled>
  );
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
