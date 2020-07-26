import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { eraseCompleteTasks } from '../../redux/actions';
import { ReactComponent as EraserSVG } from '../../assets/eraser.svg';
import Modal from '../Modal';

interface Props {
  eraseCompleteTasks: () => Action;
}

const Erase: FunctionComponent<Props> = ({ eraseCompleteTasks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmation = () => {
    setShowModal(false);
    eraseCompleteTasks();
  };

  const renderModal = () => {
    return (
      <Modal 
        message={'Remove all complete tasks?'}
        onAccept={handleConfirmation}
        onRefuse={() => setShowModal(false)}
        onClickOutside={() => setShowModal(false)}
      />
    );
  };

  return (
    <>
      {showModal && renderModal()}
      <EraserSVG onClick={() => setShowModal(true)}/>
    </> 
  );
};

export default connect(null, { eraseCompleteTasks })(Erase);