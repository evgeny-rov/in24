import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';

const modalRoot: any = document.getElementById('modal-root');

interface Props {
  onAccept: () => void;
  onRefuse: () => void;
  message: string;
}

const Modal: FunctionComponent<Props> = ({
  message,
  onAccept,
  onRefuse,
}) => {
  const modalContent = (
    <div className="modal-overlay">
      <span className="modal-text">{message}</span>
      <div className="modal-user-input">
        <input
          type="button"
          className="btn-modal"
          value="Yes"
          onClick={onAccept}
        />
        <input
          type="button"
          className="btn-modal"
          value="No"
          onClick={onRefuse}
        />
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
