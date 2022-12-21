export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

export type SetTodosAction = {
  type: 'SET_TODOS'
  payload: Todo[]
};

export type SelectTodoAction = {
  type: 'SELECT_TODO'
  payload: Todo
};

export type UnselectTodoAction = {
  type: 'UNSELECT_TODO'
};

export type TodoAction = SetTodosAction | UnselectTodoAction | SelectTodoAction;
