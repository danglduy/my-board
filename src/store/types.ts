import { AppState } from 'store/App/slice';
import { BoardState } from 'store/Board/slice';
import {
  MapStateToProps as _MapStateToProps,
  MapDispatchToProps as _MapDispatchToProps,
} from 'react-redux';

export interface State {
  readonly app: AppState;
  readonly board: BoardState;
}

export type MapStateToProps<StateProps = object, OwnProps = object> =
  _MapStateToProps<StateProps, OwnProps, State>;

export type MapDispatchToProps<DispatchProps = object, OwnProps = object> =
  _MapDispatchToProps<DispatchProps, OwnProps>;
