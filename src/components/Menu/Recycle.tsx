import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { recycle } from '../../redux/actions';
import { ReactComponent as RecycleSVG } from '../../assets/recycle.svg';

interface Props {
  recycle: () => Action;
}

const Recycle: FunctionComponent<Props> = ({ recycle }) => {
  return <RecycleSVG title="Recycle Progress" onClick={recycle} />;
};

export default connect(null, { recycle })(Recycle);
