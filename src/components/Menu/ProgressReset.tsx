import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import { ReactComponent as TrashSVG } from '../../assets/trash-can.svg';
import Modal from '../Modal';

interface Props {
  resetApp: () => Action;
}

const ProgressReset: FunctionComponent<Props> = ({ resetApp }) => {
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
      />
    );
  };

  return (
    <div>
      {showModal && renderModal()}
      <TrashSVG onClick={() => setShowModal(true)} />
    </div>
  );
}

export default connect(null, { resetApp })(ProgressReset);
