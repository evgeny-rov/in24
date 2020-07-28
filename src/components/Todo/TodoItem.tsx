import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../../redux/actions';
import useDoubleClick from '../../hooks/useCleanDoubleClick';

interface Props extends Todo {
  toggleTodo: (id: number, nextStatus: boolean) => Action;
  removeTodo: (id: number) => Action;
}

const Todo: FunctionComponent<Props> = ({
  id,
  text,
  isComplete,
  toggleTodo,
  removeTodo,
}) => {
  const onDoubleClick = useDoubleClick();
  const clsNames = isComplete ? 'complete' : '';

  const doubleClickHandler = () => removeTodo(id);

  return (
    <div className="todo-wrapper">
      <input
        onClick={() => onDoubleClick(doubleClickHandler)}
        className="checkmark"
        type="checkbox"
        name="complete"
        readOnly
        checked={isComplete}
      />
      <li role="presentation" className={clsNames} onClick={() => toggleTodo(id, !isComplete)}>
        <span>{text}</span>
      </li>
    </div>
  );
};

export default connect(null, { toggleTodo, removeTodo })(Todo);
