import React from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../redux/actions/actions';

interface props {
  id: number,
  text: string,
  isComplete: boolean,
  toggleTask: (id: number) => {},
}

const Task = ({ id, text, isComplete, toggleTask }: props) => {
  const clsNames = isComplete ? 'complete': '';

return (
    <li className={clsNames} onClick={() => toggleTask(id)}>
      <input type="checkbox" name="complete" readOnly checked={isComplete}/>
      <span>{text}</span>
    </li>
  );
}

export default connect(null, { toggleTask })(Task);