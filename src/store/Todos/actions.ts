import {
  UPDATE_TODO,
  ADD_TODO,
  REMOVE_TODO,
  REORDER_TODOS,
} from './actionTypes';
import { Todo } from './reducer';

export const updateTodo = (todo: Todo) => ({
  type: UPDATE_TODO,
  todo,
});

export const addTodo = (content: string, visibility: boolean) => ({
  type: ADD_TODO,
  payload: {
    content,
    visibility,
  },
});

export const removeTodo = (_id: string) => ({
  type: REMOVE_TODO,
  _id,
});

export const reorderTodos = (
  sourceIndex: number,
  destinationIndex: number
) => ({
  type: REORDER_TODOS,
  payload: {
    sourceIndex,
    destinationIndex,
  },
});

export type TodosAction =
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof reorderTodos>;
