import { createSelector } from 'reselect';

const allIds = (state: AppState) => state.allIds;
const todosById = (state: AppState) => state.todosById;
const expirationDate = (state: AppState) => state.expires;

export const todosSelector = createSelector(
  [ allIds, todosById ],
  (ids, todos) => ids.map((id: number) => todos[id])
);

export const completeTodosSelector = createSelector(
  todosSelector,
  (todos) => todos.filter((todo) => todo.isComplete)
);

export const progressSelector = createSelector(
  [allIds, completeTodosSelector, expirationDate],
  (ids, completeTodos, expires) => ({ complete: completeTodos.length, total: ids.length, expires })
);