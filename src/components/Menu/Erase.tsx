import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { removeCompleteTasks } from '../../redux/actions';
import { ReactComponent as EraserSVG } from '../../assets/eraser.svg';
import Modal from '../Modal';

interface Props {
  removeCompleteTasks: () => Action;
}

const Erase: FunctionComponent<Props> = ({ removeCompleteTasks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmation = () => {
    setShowModal(false);
    removeCompleteTasks();
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

export default connect(null, { removeCompleteTasks })(Erase);