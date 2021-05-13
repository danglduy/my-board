import { createSelector } from 'reselect';
import { State } from 'store/types';

const root = (state: State) => state.app;

export const selectTitle = () => createSelector(root, (state) => state.title);
