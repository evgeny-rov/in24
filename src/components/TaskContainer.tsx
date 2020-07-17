import React from 'react';
import AddTodo from './AddTodo';
import TaskList from './TaskList';
import CompletionStatus from './CompletionStatus';

const TaskContainer = (props: any) => {
	return (
		<div className="task-container">
      <CompletionStatus />
      <TaskList />
			<AddTodo />
		</div>
	);
} 

export default TaskContainer;