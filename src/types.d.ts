declare interface Action {
  type: string;
  payload?: any;
}

declare interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

declare interface AppState {
  allIds: number[];
  tasksById: {
    [id: number]: Task;
  };
  expires: number;
}
