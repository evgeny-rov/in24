import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

const modalRoot: any = document.getElementById('modal-root');

interface Props {
  onAbort: () => void;
}

const Modal: FunctionComponent<Props> = ({ children, onAbort }) => {
  const modalContent = (
    <div className="modal-overlay" onClick={onAbort}>
      {children}
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalRoot)
}

export default Modal;