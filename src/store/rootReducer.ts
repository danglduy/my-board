import { combineReducers, Reducer } from 'redux';

import { State, Action } from 'store/types';
import { appReducer } from './App/reducer';
import { todosReducer } from './Todos/reducer';

const reducer: Reducer<State, Action> = combineReducers({
  app: appReducer,
  todos: todosReducer,
});

export default reducer;
