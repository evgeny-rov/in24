import { createSelector } from 'reselect';

const allIds = (state: AppState) => state.allIds;
const tasksById = (state: AppState) => state.tasksById;
const expirationDate = (state: AppState) => state.expires;

export const tasksSelector = createSelector(
  [ allIds, tasksById ],
  (ids, tasks) => ids.map((id: number) => tasks[id])
);

export const activeTasksSelector = createSelector(
  tasksSelector,
  (tasks) => tasks.filter((task) => task.isComplete)
);

export const progressSelector = createSelector(
  [allIds, activeTasksSelector, expirationDate],
  (allTasks, activeTasks, expires) => ({ complete: activeTasks.length, total: allTasks.length, expires })
);