import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import CompletionStatus from './CompletionStatus';

const TaskContainer = () => {
	return (
		<div className="task-container">
      <CompletionStatus />
      <TaskList />
			<AddTask />
		</div>
	);
} 

export default TaskContainer;