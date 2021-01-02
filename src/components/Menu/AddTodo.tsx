import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import useTypedT from '../../hooks/useTypedT';
import { addTodo } from '../../redux/actions';
import { StyledInputField, StyledInputBtn } from '../../styled/menu';

interface Props {
  addTodo: (text: string) => Action;
}

const AddTodo: FunctionComponent<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  const t = useTypedT();

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const preparedText = text.trim();
    preparedText && addTodo(preparedText);
    setText('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <StyledInputField
        type="text"
        placeholder={`${t('input_placeholder')}`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <StyledInputBtn
        type="submit"
        value={`${t('add_action')}`}
        disabled={text.length < 2}
      />
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
