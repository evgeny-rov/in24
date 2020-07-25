import { createSelector } from 'reselect';

const allIds = (state: AppState) => state.allIds;
const tasksById = (state: AppState) => state.tasksById;
const expirationDate = (state: AppState) => state.expires;

export const incompleteIdsSelector = createSelector(
  [allIds, tasksById],
  (ids, tasks) => ids.filter((id) => !tasks[id].isComplete)
);

export const incompleteTasksSelector = createSelector(
  [incompleteIdsSelector, tasksById],
  (ids, tasks) => ids.reduce((acc, id) => ({ ...acc, [id]: tasks[id]}), {})
);

export const tasksSelector = createSelector(
  [ allIds, tasksById ],
  (ids, tasks) => ids.map((id: number) => tasks[id])
);

export const completeTasksSelector = createSelector(
  tasksSelector,
  (tasks) => tasks.filter((task) => task.isComplete)
);

export const progressSelector = createSelector(
  [allIds, completeTasksSelector, expirationDate],
  (allTasks, activeTasks, expires) => ({ complete: activeTasks.length, total: allTasks.length, expires })
);