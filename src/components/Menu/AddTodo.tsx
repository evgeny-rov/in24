import React, { useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

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
    <div className="user-input menu-item">
      <form onSubmit={handleAddTodo}>
        <input
          className="input field"
          autoFocus
          type="text"
          placeholder="New task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          className="input sbmt-btn"
          type="submit"
          value="Add"
          disabled={text.length < 2}
        />
      </form>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);