import { DropResult } from 'react-beautiful-dnd';
import { UPDATE_TASK, ADD_TASK, REMOVE_TASK, ON_DRAG_END } from './actionTypes';
import { Task } from './reducer';

export const updateTask = (listId: string, task: Task) => ({
  type: UPDATE_TASK,
  payload: {
    listId,
    task,
  },
});

export const addTask = (listId: string, content: string) => ({
  type: ADD_TASK,
  payload: {
    listId,
    content,
  },
});

export const removeTask = (listId: string, taskId: string) => ({
  type: REMOVE_TASK,
  payload: {
    listId,
    taskId,
  },
});

export const onDragEnd = (result: DropResult) => ({
  type: ON_DRAG_END,
  payload: { result },
});

export type BoardAction =
  | ReturnType<typeof updateTask>
  | ReturnType<typeof addTask>
  | ReturnType<typeof removeTask>
  | ReturnType<typeof onDragEnd>;
