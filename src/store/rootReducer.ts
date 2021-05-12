import { combineReducers, Reducer } from 'redux';

import { State, Action } from 'store/types';
import { appReducer } from './App/reducer';

const reducer: Reducer<State, Action> = combineReducers({
  app: appReducer,
});

export default reducer;
