import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { removeCompleteTodos, resetApp } from '../../redux/actions';
import { ReactComponent as EraserSVG } from '../../assets/eraser.svg';
import { ReactComponent as TrashSVG } from '../../assets/trash-can.svg';
import Modal from '../Modal';

interface Props {
  resetApp: () => Action;
  removeCompleteTodos: () => Action;
}

const Modifiers: FunctionComponent<Props> = ({ removeCompleteTodos, resetApp }) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmation = () => {
    setShowModal(false);
    resetApp();
  };

  const renderModal = () => {
    return (
      <Modal 
        message='Reset all of your progress?'
        onAccept={handleConfirmation}
        onRefuse={() => setShowModal(false)}
        onClickOutside={() => setShowModal(false)}
      />
    );
  };

  return (
    <div className="action-btns-wrapper">
      {showModal && renderModal()}
      <TrashSVG onClick={() => setShowModal(true)} />
      <EraserSVG onClick={removeCompleteTodos} />
    </div>
  );
}

export default connect(null, { removeCompleteTodos, resetApp })(Modifiers);
