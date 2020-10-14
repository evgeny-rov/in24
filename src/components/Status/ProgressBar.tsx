import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { progressSelector } from '../../selectors';
import { StyledProgressBar, ProgressBarContainer } from '../../styled/status';

interface Props {
  total: number;
  complete: number;
};

const getPercentage = (numerator: number, denominator: number) => {
  return Math.floor((numerator / denominator) * 100);
};

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  return (
    <ProgressBarContainer>
      <StyledProgressBar size={getPercentage(complete, total).toString()}/>
    </ProgressBarContainer>
  );
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
