import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectTitle, selectText } from 'store/App/selectors';
import { setTitle, setText } from 'store/App/actions';
import { Action, MapStateToProps, MapDispatchToProps } from 'store/types';
import { StateProps, DispatchProps, OwnProps } from './types';

const mapStateToProps: MapStateToProps<StateProps, OwnProps> =
  createStructuredSelector({
    title: selectTitle(),
    text: selectText(),
  });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: Dispatch<Action>
) => ({
  setTitle: (title: string) => dispatch(setTitle(title)),
  setText: (text: string) => dispatch(setText(text)),
});

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
