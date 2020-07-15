import React from 'react';
import UserInput from './UserInput';
import TaskList from './TaskList';

const TaskContainer = (props: any) => {
	return (
		<div className="task-container">
      <TaskList />
			<UserInput />
		</div>
	);
} 

export default TaskContainer;