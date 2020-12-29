import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import useTypedT from '../../hooks/useTypedT';
import { progressSelector } from '../../selectors';
import { StyledProgressText } from '../../styled/status';

interface Props {
  total: number;
  complete: number;
}

const ProgressBar: FunctionComponent<Props> = ({ total, complete }) => {
  const t = useTypedT();

  const getTextContentByProgress = (total: number, complete: number) => {
    if (total < 1) {
      return t('completion_empty');
    } else if (total - complete === 0) {
      return t('completion_done');
    }
    return `${complete}/${total}`;
  };

  return (
    <StyledProgressText complete={total - complete === 0}>
      {getTextContentByProgress(total, complete)}
    </StyledProgressText>
  );
};

const mapStateToProps = (state: AppState) => progressSelector(state);

export default connect(mapStateToProps)(ProgressBar);
