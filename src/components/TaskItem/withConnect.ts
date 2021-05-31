import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { Task } from 'store/Board/reducer';
import { updateTask, removeTask } from 'store/Board/actions';
import { MapDispatchToProps } from 'store/types';
import { DispatchProps, OwnProps } from './types';

const mapStateToProps = null;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: Dispatch<AnyAction>
) => ({
  updateTask: (listId: string, task: Task) =>
    dispatch(updateTask({ listId, task })),
  removeTask: (listId: string, taskId: string) =>
    dispatch(removeTask({ listId, taskId })),
});

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
