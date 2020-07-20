import React, { useState } from 'react';
import { connect } from 'react-redux';
import { resetApp } from '../../redux/actions';
import { ReactComponent as Trash } from '../../trash-can.svg';

interface Props {
  resetApp: () => {};
}

// rethink click outside to close
// feels like a hack right now

const ResetWithConfirmation = ({ resetApp }: Props) => {
  const [toConfirm, setToConfirm] = useState(false);

  const handleConfirmation = () => {
    setToConfirm(false);
    resetApp();
  }

  if (toConfirm) {
    return (
      <div className="nav-confirm" onBlur={() => setToConfirm(false)}>
        <span>Reset all of your progress?</span>
        <input className="nav-btn" type="button" value="Yes" autoFocus onClick={handleConfirmation}/>
        <input className="nav-btn" type="button" value="No" onClick={() => setToConfirm(false)} />
      </div>
    );
  } else {
    return <Trash onClick={() => setToConfirm(true)} />
  }
}

export default connect(null, { resetApp })(ResetWithConfirmation);
