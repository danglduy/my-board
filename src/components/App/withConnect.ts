import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectTitle } from 'store/App/selectors';
import { setTitle } from 'store/App/slice';
import { MapStateToProps, MapDispatchToProps } from 'store/types';
import { StateProps, DispatchProps, OwnProps } from './types';

const mapStateToProps: MapStateToProps<StateProps, OwnProps> =
  createStructuredSelector({
    title: selectTitle(),
  });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: Dispatch<AnyAction>
) => ({
  setTitle: (title: string) => dispatch(setTitle({ title })),
});

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
