import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import { ReactComponent as TrashSVG } from '../../assets/trash-can.svg';
import Modal from '../Modal';

interface Props {
  resetApp: () => Action;
}

const Restore: FunctionComponent<Props> = ({ resetApp }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmation = () => {
    setShowConfirm(false);
    resetApp();
  };

  const renderModal = () => {
    return (
      <Modal onAbort={() => setShowConfirm(false)}>
        <span className="modal-text">Reset all of your progress?</span>
        <div className="modal-user-input">
          <input type="button" className="btn-modal" value="Yes" onClick={handleConfirmation}/>
          <input type="button" className="btn-modal" value="No" onClick={() => setShowConfirm(false)} />
        </div>
      </Modal>
    );
  };
  
  return (
    <>
      {showConfirm && renderModal()}
      <TrashSVG onClick={() => setShowConfirm(true)} />
    </>
  );
}

export default connect(null, { resetApp })(Restore);
