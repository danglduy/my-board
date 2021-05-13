import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Todo } from 'store/Todos/reducer';
import { selectTodos } from 'store/Todos/selectors';
import {
  updateTodo,
  addTodo,
  removeTodo,
  reorderTodos,
} from 'store/Todos/actions';
import { Action, MapStateToProps, MapDispatchToProps } from 'store/types';
import { StateProps, DispatchProps, OwnProps } from './types';

const mapStateToProps: MapStateToProps<StateProps, OwnProps> =
  createStructuredSelector({
    todos: selectTodos(),
  });

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (
  dispatch: Dispatch<Action>
) => ({
  updateTodo: (todo: Todo) => dispatch(updateTodo(todo)),
  addTodo: (content: string, visibility: boolean) =>
    dispatch(addTodo(content, visibility)),
  removeTodo: (_id: string) => dispatch(removeTodo(_id)),
  reorderTodos: (sourceIndex: number, endIndex: number) =>
    dispatch(reorderTodos(sourceIndex, endIndex)),
});

export const withConnect = connect(mapStateToProps, mapDispatchToProps);
