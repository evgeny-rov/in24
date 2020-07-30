import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../../redux/actions';
import useDoubleClick from '../../hooks/useCleanDoubleClick';
import { TodoItemWrapper, TodoItemStyled, CheckBox } from '../../styled/todo';

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
  const doubleClickHandler = () => removeTodo(id);

  return (
    <TodoItemWrapper>
      <CheckBox
        onClick={() => onDoubleClick(doubleClickHandler)}
        type="checkbox"
        name="complete"
        readOnly
        checked={isComplete}
      />
      <TodoItemStyled
        role="presentation"
        complete={isComplete}
        onClick={() => toggleTodo(id, !isComplete)}
      >
        <span>{text}</span>
      </TodoItemStyled>
    </TodoItemWrapper>
  );
};

export default connect(null, { toggleTodo, removeTodo })(Todo);
