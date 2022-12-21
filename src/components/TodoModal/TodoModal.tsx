import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../Loader';
import { getUser } from '../../api';
import { User } from '../../types/User';
import { unselectTodoAction } from '../../store/todosReducer';

export const TodoModal: React.FC = () => {
  const dispatch = useDispatch();
  const todo = useSelector(
    (state: any) => state.todosReducer.selectedTodo,
  );

  const [user, setUser] = useState<User>();

  useEffect(() => {
    getUser(todo.id).then(res => setUser(res));
  }, []);

  const handleUnselectTodo = () => {
    dispatch(unselectTodoAction());
  };

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {user
        ? (
          <div className="modal-card">
            <header className="modal-card-head">
              <div
                className="modal-card-title has-text-weight-medium"
                data-cy="modal-header"
              >
                {`Todo #${todo.id}`}
              </div>

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button
                type="button"
                className="delete"
                data-cy="modal-close"
                onClick={handleUnselectTodo}
              />
            </header>

            <div className="modal-card-body">
              <p className="block" data-cy="modal-title">{todo.title}</p>

              <p className="block" data-cy="modal-user">
                {/* For not completed */}
                {todo.completed
                  ? (
                    <strong className="has-text-success">Done</strong>
                  ) : (
                    <strong className="has-text-danger">Planned</strong>
                  )}

                {/* For completed */}
                {' by '}
                <a href={`mailto:${user?.email}`}>{user?.name}</a>
              </p>
            </div>
          </div>
        )
        : (
          <Loader />
        )}
    </div>
  );
};
