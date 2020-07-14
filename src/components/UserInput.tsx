import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';

const UserInput = (props: any) => {
  const [text, setText] = useState('');

  const handleAddTodo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (text === '') return;

    props.addTodo(text);
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
  { addTodo }
)(UserInput)