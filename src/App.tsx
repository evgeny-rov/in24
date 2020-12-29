import React from 'react';
import './i18n';
import Menu from './components/containers/Menu';
import Status from './components/containers/Status';
import Toolbar from './components/containers/Toolbar';
import TodoList from './components/Todo/TodoList';
import ProgressBar from './components/Status/ProgressBar';
import Countdown from './components/Status/Countdown';
import ProgressContext from './components/Status/ProgressContext';
import AppReset from './components/Menu/AppReset';
import Info from './components/Menu/Info';
import AddTodo from './components/Menu/AddTodo';
import Recycle from './components/Menu/Recycle';

import { AppWrapper, BGLogo, TodoContainer } from './styled/general';

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
            <AppReset />
            <Recycle />
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
