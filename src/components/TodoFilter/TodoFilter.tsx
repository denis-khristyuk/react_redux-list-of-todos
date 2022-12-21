import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterAction, setQueryAction } from '../../store/filterReducer';

export const TodoFilter: React.FC = () => {
  const dispatch = useDispatch();
  const query = useSelector(
    (state: any) => state.filterReducer.query,
  );

  const handleSelectFilter = (value: any) => {
    dispatch(setFilterAction(value));
  };

  const handleChangeQuery = (value: any) => {
    dispatch(setQueryAction(value));
  };

  return (
    <form
      className="field has-addons"
      onSubmit={event => event.preventDefault()}
    >
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={e => handleSelectFilter(e.target.value)}
          >
            <option value="all">
              All
            </option>

            <option value="active">
              Active
            </option>

            <option value="completed">
              Completed
            </option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={e => handleChangeQuery(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => handleChangeQuery('')}
          />
        </span>
      </p>
    </form>
  );
};
