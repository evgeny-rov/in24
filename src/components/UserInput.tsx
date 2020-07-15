import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

interface props {
  addTask: (text: string) => {};
}

const UserInput = ({ addTask }: props) => {
  const [text, setText] = useState('');

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text === '') return;

    addTask(text);
    setText('');
  };

  return (
    <div className="user-input">
      <input type="text" placeholder="New task..." value={text} onChange={(e) => setText(e.target.value)} />
      <input type="submit" value="Add" onClick={handleAddTodo} />
    </div>
  );
}

export default connect(
  null,
  { addTask }
)(UserInput)