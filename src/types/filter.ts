export type FilterAction = SetQueryAction | SetFilterAction;

export type Filter = 'all' | 'active' | 'completed';

export type SetQueryAction = {
  type: 'SET_QUERY'
  payload: string
};

export type SetFilterAction = {
  type: 'SET_FILTER'
  payload: Filter
};
