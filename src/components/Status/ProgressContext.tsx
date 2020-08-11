import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../../selectors';
import { StyledProgressText } from '../../styled/status';

interface Props {
  total: number;
  complete: number;
}

const getTextContentByProgress = (total: number, complete: number) => {
  if (total < 1) {
    return 'Add some todos';
  } else if (total - complete === 0) {
    return 'Take a break or add new todos!';
  }
  return `${complete}/${total}`;
};

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  return (
    <StyledProgressText complete={total - complete === 0}>
      {getTextContentByProgress(total, complete)}
    </StyledProgressText>
  );
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
