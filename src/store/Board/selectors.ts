import { createSelector } from 'reselect';
import { State } from 'store/types';

const root = (state: State) => state.board;

export const selectLists = () => createSelector(root, (state) => state.lists);
