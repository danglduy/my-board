import { combineReducers, Reducer } from 'redux';

import { State, Action } from 'store/types';
import { appReducer } from './App/reducer';
import { boardReducer } from './Board/reducer';

const reducer: Reducer<State, Action> = combineReducers({
  app: appReducer,
  board: boardReducer,
});

export default reducer;
