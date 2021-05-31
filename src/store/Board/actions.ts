import { createAction } from '@reduxjs/toolkit';
import { DropResult } from 'react-beautiful-dnd';
import { UPDATE_TASK, ADD_TASK, REMOVE_TASK, ON_DRAG_END } from './actionTypes';
import { Task } from './reducer';

export const updateTask =
  createAction<{ listId: string; task: Task }>(UPDATE_TASK);

export const addTask =
  createAction<{ listId: string; content: string }>(ADD_TASK);

export const removeTask =
  createAction<{ listId: string; taskId: string }>(REMOVE_TASK);

export const onDragEnd = createAction<{ result: DropResult }>(ON_DRAG_END);
