import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import useTypedT from '../hooks/useTypedT';
import { ModalOverlay, ModalText, ModalBtn } from '../styled/modal';

const modalRoot: any = document.getElementById('modal-root');

interface Props {
  onAccept: () => void;
  onRefuse: () => void;
  message: string;
}

const Modal: FunctionComponent<Props> = ({ message, onAccept, onRefuse }) => {
  const t = useTypedT();

  const modalContent = (
    <ModalOverlay>
      <ModalText>{message}</ModalText>
      <div>
        <ModalBtn type="button" value={t('confirm')} onClick={onAccept} />
        <ModalBtn type="button" value={t('deny')} onClick={onRefuse} />
      </div>
    </ModalOverlay>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
