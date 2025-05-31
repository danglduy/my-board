import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { DropResult } from '@hello-pangea/dnd';
import {
  Task,
  updateTask,
  addTask,
  removeTask,
  onDragEnd,
} from 'store/Board/slice';
import { selectLists } from 'store/Board/selectors';
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
