import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Task } from 'store/Board/reducer';
import { updateTask, removeTask } from 'store/Board/actions';
import { Action, MapDispatchToProps } from 'store/types';
import { DispatchProps, OwnProps } from './types';

const mapStateToProps = null;

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: Dispatch<Action>
) => ({
  updateTask: (listId: string, task: Task) =>
    dispatch(updateTask(listId, task)),
  removeTask: (listId: string, taskId: string) =>
    dispatch(removeTask(listId, taskId)),
});

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
