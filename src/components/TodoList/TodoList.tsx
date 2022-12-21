/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import { Loader } from '../Loader';
import { Notification } from '../Notification/Notification';

export const TodoList: React.FC = () => {
  const todos = useSelector(
    (state: any) => state.todosReducer.todos,
  );

  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const query = useSelector(
    (state: any) => state.filterReducer.query,
  );

  const filterBy = useSelector(
    (state: any) => state.filterReducer.filter,
  );

  useEffect(() => {
    if (filterBy === 'all') {
      setFilteredTodos(
        todos.filter((todo: Todo) => (todo.title.includes(query))),
      );
    }

    if (filterBy === 'active') {
      setFilteredTodos(
        todos.filter(
          (todo: Todo) => (todo.title.includes(query) && !todo.completed),
        ),
      );
    }

    if (filterBy === 'completed') {
      setFilteredTodos(
        todos.filter(
          (todo: Todo) => (todo.title.includes(query) && todo.completed),
        ),
      );
    }
  }, [query, filterBy]);

  return (
    <>

      {/* eslint-disable-next-line no-nested-ternary */}
      {filteredTodos.length === 0 && todos.length > 0 ? (<Notification />)
        : (
          todos.length > 0
            ? (
              <table className="table is-narrow is-fullwidth">
                <thead>
                  <tr>
                    <th>#</th>

                    <th>
                      <span className="icon">
                        <i className="fas fa-check" />
                      </span>
                    </th>

                    <th>Title</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTodos.map((todo: Todo) => (
                    <TodoItem todo={todo} key={todo.id} />
                  ))}
                </tbody>
              </table>
            ) : (
              <Loader />
            )
        )}
    </>
  );
};
