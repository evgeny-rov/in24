import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import { ReactComponent as TrashSVG } from '../../assets/trash-can.svg';
import Modal from '../Modal';
import useTypedT from '../../hooks/useTypedT';

interface Props {
  resetApp: () => Action;
}

const ProgressReset: FunctionComponent<Props> = ({ resetApp }) => {
  const [showModal, setShowModal] = useState(false);
  const t = useTypedT();

  const handleConfirmation = () => {
    setShowModal(false);
    resetApp();
  };

  const renderModal = () => {
    return (
      <Modal
        message={t('reset_message')}
        onAccept={handleConfirmation}
        onRefuse={() => setShowModal(false)}
      />
    );
  };

  return (
    <div>
      {showModal && renderModal()}
      <TrashSVG title={t('reset_hover')} onClick={() => setShowModal(true)} />
    </div>
  );
};

export default connect(null, { resetApp })(ProgressReset);
