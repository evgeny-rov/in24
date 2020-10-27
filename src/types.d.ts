declare interface Action {
  type: string;
  payload?: any;
}

declare interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

declare interface AppState {
  allIds: number[];
  todosById: {
    [id: number]: Todo;
  };
  expires: number;
  isCountdownActive: boolean;
}
