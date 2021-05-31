import { DropResult } from 'react-beautiful-dnd';
import { createReducer } from '@reduxjs/toolkit';
import { Draft } from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { addTask, onDragEnd, removeTask, updateTask } from './actions';

const reorderItems = <T extends Task | List>(
  items: Array<T>,
  sourceIndex: number,
  destinationIndex: number
): void => {
  const [removed] = items.splice(sourceIndex, 1);
  items.splice(destinationIndex, 0, removed);
};

const handleDragEnd = (state: Draft<BoardState>, result: DropResult): void => {
  const { destination, source, type } = result;

  if (!destination) {
    return;
  }

  // Dragging item but position is not changed
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  // Dragging columns
  if (type === 'column') {
    reorderItems(state.lists, source.index, destination.index);
    return;
  }

  // Dragging items within the same column
  if (source.droppableId === destination.droppableId) {
    const resultList = state.lists.find(
      (list) => list._id === source.droppableId
    );

    if (!resultList) {
      return;
    }

    const list = state.lists.find((list) => list._id === source.droppableId);
    if (!list) {
      return;
    }

    reorderItems(list.tasks, source.index, destination.index);
    return;
  }

  // Dragging items across columns
  const startList = state.lists.find((list) => list._id === source.droppableId);
  const destinationList = state.lists.find(
    (list) => list._id === destination.droppableId
  );

  if (!startList || !destinationList) {
    return;
  }

  const [movedTask] = startList.tasks.splice(source.index, 1);
  destinationList.tasks.splice(destination.index, 0, movedTask);

  return;
};

export interface Task {
  readonly _id: string;
  readonly content: string;
}

export interface List {
  readonly _id: string;
  readonly title: string;
  readonly tasks: Task[];
}

export interface BoardState {
  readonly _id: string;
  readonly lists: List[];
}

export const initialState: BoardState = {
  _id: uuidv4(),
  lists: [
    {
      _id: uuidv4(),
      title: 'Todo',
      tasks: [
        {
          _id: uuidv4(),
          content: 'Task Content',
        },
        {
          _id: uuidv4(),
          content: 'New Task Content',
        },
        {
          _id: uuidv4(),
          content: 'Old Task Content',
        },
      ],
    },
    {
      _id: uuidv4(),
      title: 'Done',
      tasks: [
        {
          _id: uuidv4(),
          content: 'Task Content 2',
        },
        {
          _id: uuidv4(),
          content: 'New Task Content 2',
        },
        {
          _id: uuidv4(),
          content: 'Old Task Content 2',
        },
      ],
    },
  ],
};

export const boardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateTask, (state, action) => {
      const list = state.lists.find(
        (list) => list._id === action.payload.listId
      );

      if (!list) {
        return;
      }

      let task = list.tasks.find(
        (task) => task._id === action.payload.task._id
      );

      if (!task) {
        return;
      }

      task = action.payload.task;
    })
    .addCase(addTask, (state, action) => {
      const list = state.lists.find(
        (list) => list._id === action.payload.listId
      );

      if (!list) {
        return;
      }

      list.tasks.push({
        _id: uuidv4(),
        content: action.payload.content,
      });
    })
    .addCase(removeTask, (state, action) => {
      const list = state.lists.find(
        (list) => list._id === action.payload.listId
      );

      if (!list) {
        return;
      }

      const taskIndex = list.tasks.findIndex(
        (task) => task._id === action.payload.taskId
      );

      if (taskIndex === -1) {
        return;
      }

      list.tasks.splice(taskIndex, 1);
    })
    .addCase(onDragEnd, (state, action) => {
      handleDragEnd(state, action.payload.result);
    });
});
