import {
  Filter,
  FilterAction,
  SetFilterAction,
  SetQueryAction,
} from '../types/filter';

const initialState = {
  query: '',
  filter: 'all',
};

export const setQueryAction = (query: string): SetQueryAction => ({
  type: 'SET_QUERY',
  payload: query,
});

export const setFilterAction = (filter: Filter): SetFilterAction => ({
  type: 'SET_FILTER',
  payload: filter,
});

export const filterReducer = (
  state = initialState,
  action: FilterAction,
) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, query: action.payload };

    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
