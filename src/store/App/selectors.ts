import { createSelector } from '@reduxjs/toolkit';
import { State } from 'store/types';

const root = (state: State) => state.app;

export const selectTitle = () => createSelector(root, (state) => state.title);
