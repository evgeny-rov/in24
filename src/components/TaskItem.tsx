import React from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../redux/actions/actions';

interface Props extends Task {
  toggleTask: (id: number, nextStatus: boolean) => Action,
}

const Task = ({ id, text, isComplete, toggleTask }: Props) => {
  const clsNames = isComplete ? 'complete': '';

return (
    <li className={clsNames} onClick={() => toggleTask(id, !isComplete)}>
      <input type="checkbox" name="complete" readOnly checked={isComplete}/>
      <span>{text}</span>
    </li>
  );
}

export default connect(null, { toggleTask })(Task);