import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { DropResult } from 'react-beautiful-dnd';
import { Task } from 'store/Board/reducer';
import { selectLists } from 'store/Board/selectors';
import {
  updateTask,
  addTask,
  removeTask,
  onDragEnd,
} from 'store/Board/actions';
import { MapStateToProps, MapDispatchToProps } from 'store/types';
import { StateProps, DispatchProps, OwnProps } from './types';

const mapStateToProps: MapStateToProps<StateProps, OwnProps> =
  createStructuredSelector({
    lists: selectLists(),
  });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: Dispatch<AnyAction>
) => ({
  updateTask: (listId: string, task: Task) =>
    dispatch(updateTask({ listId, task })),
  addTask: (listId: string, content: string) =>
    dispatch(addTask({ listId, content })),
  removeTask: (listId: string, taskId: string) =>
    dispatch(removeTask({ listId, taskId })),
  onDragEnd: (result: DropResult) => dispatch(onDragEnd({ result })),
});

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
