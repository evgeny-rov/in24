import React from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import CompletionStatus from './CompletionStatus';

export default () => {
	return (
		<div className="todo-container">
      <CompletionStatus />
      <TaskList />
			<AddTask />
		</div>
	);
} 
