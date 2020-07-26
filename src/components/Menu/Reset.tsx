import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import { ReactComponent as TrashSVG } from '../../assets/trash-can.svg';
import Modal from '../Modal';

interface Props {
  resetApp: () => Action;
}

const Restore: FunctionComponent<Props> = ({ resetApp }) => {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmation = () => {
    setShowModal(false);
    resetApp();
  };

  const renderModal = () => {
    return (
      <Modal 
        message={'Reset all of your progress?'}
        onAccept={handleConfirmation}
        onRefuse={() => setShowModal(false)}
        onClickOutside={() => setShowModal(false)}
      />
    );
  };
  
  return (
    <>
      {showModal && renderModal()}
      <TrashSVG onClick={() => setShowModal(true)} />
    </>
  );
}

export default connect(null, { resetApp })(Restore);
