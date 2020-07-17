import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../redux/actions/actions';

interface props {
  addTask: (text: string) => {};
}

const AddTodo = ({ addTask }: props) => {
  const [text, setText] = useState('');

  const handleAddTask = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(text);
    setText('');
  };

  return (
    <div className="user-input">
      <form onSubmit={handleAddTask}>
        <input className="input field" autoFocus type="text" placeholder="New task..." value={text} onChange={(e) => setText(e.target.value)} />
        <input className="input sbmt-btn" type="submit" value="Add" disabled={text.length < 2} />
      </form>
    </div>
  );
}

export default connect(
  null,
  { addTask }
)(AddTodo)