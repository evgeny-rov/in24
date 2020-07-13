import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const tasks = useSelector((state: any) => {
    const { tasks, completeTasksIds } = state;
    return tasks.filter((task: any) => !completeTasksIds.includes(task.id));
  });
  const completeTasks = useSelector((state: any) => {
    const { tasks, completeTasksIds } = state;
    return tasks.filter((task: any) => completeTasksIds.includes(task.id));
  });
  
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTask = () => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        text
      }
    })
    setText('');
  };

  const handleToggleTask = (id: number) => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: {
        id
      }
    })
  }

  const renderCompleteTasks = () => {
    return (
      <div className="tasks-block">
        <span>Complete tasks:</span>
        <ul className="task-list complete">
          {completeTasks.map(({ id, text }: any) => {
            return (
              <React.Fragment key={id}>
                <li>
                  <input type="checkbox" name="" id="" onChange={() => handleToggleTask(id)} />
                  {text}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }

  const renderIncompleteTasks = () => {
    return (
      <div className="tasks-block">
        <span>incomplete tasks:</span>
        <ul className="task-list incomplete">
          {tasks.map(({ id, text }: any) => {
            return (
              <React.Fragment key={id}>
                <li>
                  <input type="checkbox" name="" id="" onChange={() => handleToggleTask(id)} />
                  {text}
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="task-container">
        <div className="tasks">
          {renderCompleteTasks()}
          {renderIncompleteTasks()}
        </div>
        <div className="user-input">
          <input type="text" value={text} placeholder="Type in new task" onChange={(e) => setText(e.target.value)}/>
          <input type="button" value="add" onClick={handleAddTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
