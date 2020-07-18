export namespace Todo {
  interface TaskInt {
    id: number;
    text: string;
    isComplete: boolean;
  }

  interface TaskStateInt {
    todo: {
      tasks: {
        [id: string]: TaskInt;
      },
      progress: {
        total: number;
        completeTasks: number;
      }
    }
  }

  interface Action {
    type: string;
    payload: any;
  }
}