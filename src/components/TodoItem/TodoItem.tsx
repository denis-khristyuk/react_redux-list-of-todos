import React from 'react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { Todo } from '../../types/Todo';
import { selectTodoAction } from '../../store/todosReducer';

type Props = {
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleSelectTodo = () => {
    dispatch(selectTodoAction(todo));
  };

  return (
    <tr data-cy="todo">
      <td className="is-vcentered">{todo.id}</td>
      <td className="is-vcentered"> </td>

      <td className="is-vcentered is-expanded">
        <p className={cn(
          {
            'has-text-danger': !todo.completed,
            'has-text-success': todo.completed,
          },
        )}
        >
          {todo.title}
        </p>
      </td>

      <td className="has-text-right is-vcentered">
        <button
          data-cy="selectButton"
          className="button"
          type="button"
          onClick={handleSelectTodo}
        >
          <span className="icon">
            <i className="far fa-eye" />
          </span>
        </button>
      </td>
    </tr>
  );
};
