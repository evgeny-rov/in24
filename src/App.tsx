import React from 'react';
import './App.css';
import Menu from './components/containers/Menu';
import Status from './components/containers/Status';
import Toolbar from './components/containers/Toolbar';
import TodoList from './components/Todo/TodoList';
import ProgressBar from './components/Status/ProgressBar';
import Countdown from './components/Status/Countdown';
import ProgressContext from './components/Status/ProgressContext';
import Modifiers from './components/Menu/Modifiers';
import Info from './components/Menu/Info';
import AddTodo from './components/Menu/AddTodo';

import { AppWrapper, BGLogo, TodoContainer } from './styled/components';

function App() {
  return (
    <AppWrapper>
      <TodoContainer>
        <Status>
          <ProgressBar />
          <Countdown />
          <ProgressContext />
        </Status>
        <TodoList />
        <Menu>
          <Toolbar>
            <Modifiers />
            <Info />
          </Toolbar>
          <AddTodo />
        </Menu>
        <BGLogo>in24</BGLogo>
      </TodoContainer>
    </AppWrapper>
  );
}

export default App;
