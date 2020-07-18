declare interface Action {
  type: string;
  payload: any;
}

declare interface Task {
  id: number;
  text: string;
  isComplete: boolean;
}

declare interface ProgressState {
  total: number;
  complete: number;
  expires: number;
}

declare interface TodoState {
  tasks: {
    [id: number]: Task;
  };
  allIds: number[];
}

declare interface AppState {
  todo: TodoState;
  progress: ProgressState;
}

