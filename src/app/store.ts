import { combineReducers, createStore } from 'redux';
import { todosReducer } from '../store/todosReducer';
import { filterReducer } from '../store/filterReducer';

const rootStore = combineReducers({ todosReducer, filterReducer });

export const store = createStore(rootStore);
