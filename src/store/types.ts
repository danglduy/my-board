import { AppState, AppAction } from 'store/App/types';
import { TodosState, TodosAction } from 'store/Todos/types';
import {
  MapStateToProps as _MapStateToProps,
  MapDispatchToProps as _MapDispatchToProps,
} from 'react-redux';

export interface State {
  readonly app: AppState;
  readonly todos: TodosState;
}

export type Action = AppAction | TodosAction;

export type MapStateToProps<StateProps = object, OwnProps = object> =
  _MapStateToProps<StateProps, OwnProps, State>;

export type MapDispatchToProps<DispatchProps = object, OwnProps = object> =
  _MapDispatchToProps<DispatchProps, OwnProps>;
