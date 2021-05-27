import { AppState, AppAction } from 'store/App/types';
import { BoardState, BoardAction } from 'store/Board/types';
import {
  MapStateToProps as _MapStateToProps,
  MapDispatchToProps as _MapDispatchToProps,
} from 'react-redux';

export interface State {
  readonly app: AppState;
  readonly board: BoardState;
}

export type Action = AppAction | BoardAction;

export type MapStateToProps<StateProps = object, OwnProps = object> =
  _MapStateToProps<StateProps, OwnProps, State>;

export type MapDispatchToProps<DispatchProps = object, OwnProps = object> =
  _MapDispatchToProps<DispatchProps, OwnProps>;
