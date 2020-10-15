import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../../selectors';
import getPercentage from '../../utils/getPercentage';
import { StyledProgressBar, ProgressBarContainer } from '../../styled/status';

interface Props {
  total: number;
  complete: number;
}

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  return (
    <ProgressBarContainer>
      <StyledProgressBar size={getPercentage(complete, total).toString()} />
    </ProgressBarContainer>
  );
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
