import { createSelector } from 'reselect';
import { State } from 'store/types';

const root = (state: State) => state.todos;

export const selectTodos = () => createSelector(root, (state) => state.todos);
