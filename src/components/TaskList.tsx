import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';

interface task {
  id: number,
  text: string,
  isComplete: boolean,
}

interface State {
  tasks: object,
}

interface props {
  tasks: Array<task>,
}

const TaskList = ({ tasks }: props) => {
  return (
    <ul className="task-list">
      {tasks.map(({ id, text, isComplete}) => {
        return <Task key={id} id={id} text={text} isComplete={isComplete} />
      })}
    </ul>
  );
}

const mapStateToProps = (state: State) => {
  return { tasks: Object.values(state.tasks) };
}

export default connect(mapStateToProps)(TaskList);
