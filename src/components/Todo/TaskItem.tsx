import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { toggleTask, removeTask } from '../../redux/actions';
import useDoubleClick from '../../hooks/useCleanDoubleClick';

interface Props extends Task {
  toggleTask: (id: number, nextStatus: boolean) => Action;
  removeTask: (id: number) => Action;
}

const Task: FunctionComponent<Props> = ({ id, text, isComplete, toggleTask, removeTask }) => {
  const onDoubleClick = useDoubleClick();
  const clsNames = isComplete ? 'complete': '';

  const doubleClickHandler = () => removeTask(id);

  return (
      <div className="task-wrapper">
        <input onClick={() => onDoubleClick(doubleClickHandler)} className="checkmark" type="checkbox" name="complete" readOnly checked={isComplete} />
        <li className={clsNames} onClick={() => toggleTask(id, !isComplete)}>
          <span>{text}</span>
        </li>
      </div>
  );
}

export default connect(null, { toggleTask, removeTask })(Task);