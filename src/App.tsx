/* eslint-disable max-len */
import React, { useEffect } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { useDispatch, useSelector } from 'react-redux';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { getTodos } from './api';
import { setTodosAction } from './store/todosReducer';
import { TodoModal } from './components/TodoModal';
import './App.scss';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const selectedTodo = useSelector(
    (state: any) => state.todosReducer.selectedTodo,
  );

  useEffect(() => {
    getTodos().then(res => dispatch(setTodosAction(res)));
  }, []);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>

            <div className="block">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
      {selectedTodo && <TodoModal />}
    </>
  );
};
