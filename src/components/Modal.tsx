import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { ModalOverlay, ModalText, ModalBtn } from '../styled/modal';

const modalRoot: any = document.getElementById('modal-root');

interface Props {
  onAccept: () => void;
  onRefuse: () => void;
  message: string;
}

const Modal: FunctionComponent<Props> = ({ message, onAccept, onRefuse }) => {
  const modalContent = (
    <ModalOverlay>
      <ModalText>{message}</ModalText>
      <div>
        <ModalBtn type="button" value="Yes" onClick={onAccept} />
        <ModalBtn type="button" value="No" onClick={onRefuse} />
      </div>
    </ModalOverlay>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
