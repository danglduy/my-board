import { SET_TITLE, SET_TEXT } from './actionTypes';

export const setTitle = (title: string) => ({
  type: SET_TITLE,
  title,
});

export const setText = (text: string) => ({
  type: SET_TEXT,
  text,
});

interface Actions {
  readonly [SET_TITLE]: ReturnType<typeof setTitle>;
  readonly [SET_TEXT]: ReturnType<typeof setText>;
}

export type AppAction = Actions[keyof Actions];

// equivalent to the following
// export type AppAction =
//   | ReturnType<typeof setTitle>
//   | ReturnType<typeof setText>;
