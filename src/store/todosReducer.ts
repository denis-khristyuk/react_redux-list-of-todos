import {
  SelectTodoAction,
  SetTodosAction,
  Todo, TodoAction, UnselectTodoAction,
} from '../types/Todo';

export const setTodosAction = (todos: Todo[]): SetTodosAction => ({
  type: 'SET_TODOS',
  payload: todos,
});

export const selectTodoAction = (todo: Todo): SelectTodoAction => ({
  type: 'SELECT_TODO',
  payload: todo,
});

export const unselectTodoAction = (): UnselectTodoAction => ({
  type: 'UNSELECT_TODO',
});

const initialState = {
  todos: [],
  selectedTodo: null,
};

export const todosReducer = (
  state = initialState,
  action: TodoAction,
) => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };

    case 'SELECT_TODO':
      return { ...state, selectedTodo: action.payload };

    case 'UNSELECT_TODO':
      return { ...state, selectedTodo: null };

    default:
      return state;
  }
};
