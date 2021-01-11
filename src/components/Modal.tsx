import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import useTypedTranslation from '../hooks/useTypedTranslation';
import { ModalOverlay, ModalText, ModalBtn } from '../styled/modal';

interface Props {
  onAccept: () => void;
  onRefuse: () => void;
  message: string;
}

const Modal: FunctionComponent<Props> = ({ message, onAccept, onRefuse }) => {
  const modalRoot: HTMLElement | null = document.getElementById('modal-root');
  const t = useTypedTranslation();

  const modalContent = (
    <ModalOverlay>
      <ModalText>{message}</ModalText>
      <div>
        <ModalBtn type="button" value={t('confirm')} onClick={onAccept} />
        <ModalBtn type="button" value={t('deny')} onClick={onRefuse} />
      </div>
    </ModalOverlay>
  );

  return modalRoot && ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
