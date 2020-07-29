import { createSelector } from 'reselect';

const allIds = (state: AppState) => state.allIds;
const todosById = (state: AppState) => state.todosById;

export const todosSelector = createSelector([allIds, todosById], (ids, todos) =>
  ids.map((id: number) => todos[id])
);

export const completeTodosSelector = createSelector(todosSelector, (todos) =>
  todos.filter((todo) => todo.isComplete)
);

export const progressSelector = createSelector(
  [allIds, completeTodosSelector],
  (ids, completeTodos) => ({
    complete: completeTodos.length,
    total: ids.length,
  })
);
