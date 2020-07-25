import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { eraseCompleteTasks } from '../../redux/actions';
import { ReactComponent as EraserSVG } from '../../assets/eraser.svg';
import Modal from '../Modal';

interface Props {
  eraseCompleteTasks: () => Action;
}

const Erase: FunctionComponent<Props> = ({ eraseCompleteTasks }) => {
  return (
    <>
      <EraserSVG onClick={eraseCompleteTasks}/>
    </> 
  );
};

export default connect(null, { eraseCompleteTasks })(Erase);