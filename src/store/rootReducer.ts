import { AnyAction, combineReducers, Reducer } from 'redux';

import { State } from 'store/types';
import { appReducer } from './App/reducer';
import { boardReducer } from './Board/reducer';

const reducer: Reducer<State, AnyAction> = combineReducers({
  app: appReducer,
  board: boardReducer,
});

export default reducer;
