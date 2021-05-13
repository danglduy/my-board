import { Reducer } from 'redux';
import { Action } from 'store/types';
import { SET_TITLE } from './actionTypes';

export interface AppState {
  readonly title: string;
}

export const initialState = {
  title: 'My Todo',
};

export const appReducer: Reducer<AppState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_TITLE: {
      return { ...state, title: action.title };
    }
    default:
      return state;
  }
};
