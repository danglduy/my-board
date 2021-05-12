import { Reducer } from 'redux';
import { Action } from 'store/types';
import { SET_TITLE, SET_TEXT } from './actionTypes';

export interface AppState {
  readonly title: string;
  readonly text: string;
}

export const initialState = {
  title: '',
  text: '',
};

export const appReducer: Reducer<AppState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_TITLE: {
      return { ...state, title: action.title };
    }
    case SET_TEXT: {
      return { ...state, text: action.text };
    }
    default:
      return state;
  }
};
