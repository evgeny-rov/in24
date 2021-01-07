import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import useDoubleClick from '../../hooks/useCleanDoubleClick';
import { toggleTodo, removeTodo } from '../../redux/actions';
import { StyledListItem, CustomCheckbox } from '../../styled/todo';
import { ReactComponent as CheckmarkSVG } from '../../assets/checkmark.svg';

interface Props extends Todo {
  toggleTodo: (id: number, nextStatus: boolean) => Action;
  removeTodo: (id: number) => Action;
}

const getRandomItemAnim = () => {
  const randomXValue = Math.round(Math.random()) > 0 ? 100 : -100;

  return {
    hidden: { x: randomXValue, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
};

const Todo: FunctionComponent<Props> = ({
  id,
  text,
  isComplete,
  toggleTodo,
  removeTodo,
}) => {
  const onDoubleClick = useDoubleClick(300);

  const doubleClickHandler = () => removeTodo(id);

  return (
    <StyledListItem
      isComplete={isComplete}
      variants={getRandomItemAnim()}
      role="presentation"
      onClick={() => toggleTodo(id, !isComplete)}
      onDragEnd={(e, info) => info.offset.x > 150 && removeTodo(id)}
      drag="x"
      dragDirectionLock
      dragElastic={1}
      dragConstraints={{ left: 0, right: 0 }}
    >
      <CustomCheckbox
        role="checkbox"
        isComplete={isComplete}
        onClick={() => onDoubleClick(doubleClickHandler)}
      >
        <CheckmarkSVG />
      </CustomCheckbox>
      <span>{text}</span>
    </StyledListItem>
  );
};

export default connect(null, { toggleTodo, removeTodo })(Todo);
