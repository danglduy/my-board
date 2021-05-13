import { SET_TITLE } from './actionTypes';

export const setTitle = (title: string) => ({
  type: SET_TITLE,
  title,
});

export type AppAction = ReturnType<typeof setTitle>;
