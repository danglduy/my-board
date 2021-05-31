import { createReducer } from '@reduxjs/toolkit';
import { setTitle } from './actions';

export interface AppState {
  readonly title: string;
}

export const initialState = {
  title: 'My Todo',
};

export const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(setTitle, (state, action) => {
    state.title = action.payload.title;
  });
});
