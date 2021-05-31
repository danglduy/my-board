import { AnyAction, combineReducers, Reducer } from 'redux';

import { State } from 'store/types';
import appReducer from './App/slice';
import boardReducer from './Board/slice';

const reducer: Reducer<State, AnyAction> = combineReducers({
  app: appReducer,
  board: boardReducer,
});

export default reducer;
