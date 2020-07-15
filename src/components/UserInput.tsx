import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

interface props {
  addTask: (text: string) => {};
}

const UserInput = ({ addTask }: props) => {
  const [text, setText] = useState('');

  const handleAddTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(text);
    setText('');
  };

  return (
    <div className="user-input">
      <input className="input field" type="text" placeholder="New task..." value={text} onChange={(e) => setText(e.target.value)} />
      <input className="input sbmt-btn" type="submit" value="Add" disabled={text.length < 2} onClick={handleAddTask} />
    </div>
  );
}

export default connect(
  null,
  { addTask }
)(UserInput)