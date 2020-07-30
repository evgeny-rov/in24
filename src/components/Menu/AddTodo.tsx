import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { StyledInputField, StyledInputBtn } from '../../styled/menu';

interface Props {
  addTodo: (text: string) => Action;
}

const AddTodo: FunctionComponent<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleAddTodo}>
      <StyledInputField
        className="input field"
        type="text"
        placeholder="New task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <StyledInputBtn
        className="input sbmt-btn"
        type="submit"
        value="Add"
        disabled={text.length < 2}
      />
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
