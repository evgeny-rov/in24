import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { removeCompleteTodos } from '../../redux/actions';
import { ReactComponent as RecycleSVG } from '../../assets/recycle.svg';

interface Props {
  removeCompleteTodos: () => Action;
}

const Recycle: FunctionComponent<Props> = ({ removeCompleteTodos }) => {
  return <RecycleSVG onClick={removeCompleteTodos}/>;
};

export default connect(null, { removeCompleteTodos })(Recycle);
