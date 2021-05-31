import { DropResult } from 'react-beautiful-dnd';
import { Reducer } from 'redux';
import { produce, Draft } from 'immer';
import { Action } from 'store/types';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, REMOVE_TASK, UPDATE_TASK, ON_DRAG_END } from './actionTypes';

const reorderItems = <T extends Task | List>(
  items: Array<T>,
  sourceIndex: number,
  destinationIndex: number
): void => {
  const [removed] = items.splice(sourceIndex, 1);
  items.splice(destinationIndex, 0, removed);
};

const handleDragEnd = (draft: Draft<BoardState>, result: DropResult): void => {
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
    reorderItems(draft.lists, source.index, destination.index);
    return;
  }

  // Dragging items within the same column
  if (source.droppableId === destination.droppableId) {
    const resultList = draft.lists.find(
      (list) => list._id === source.droppableId
    );

    if (!resultList) {
      return;
    }

    const list = draft.lists.find((list) => list._id === source.droppableId);
    if (!list) {
      return;
    }

    reorderItems(list.tasks, source.index, destination.index);
    return;
  }

  // Dragging items across columns
  const startList = draft.lists.find((list) => list._id === source.droppableId);
  const destinationList = draft.lists.find(
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

export const boardReducer: Reducer<BoardState, Action> = produce(
  (draft: Draft<BoardState>, action) => {
    switch (action.type) {
      case UPDATE_TASK: {
        const list = draft.lists.find(
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
        break;
      }

      case ADD_TASK: {
        const list = draft.lists.find(
          (list) => list._id === action.payload.listId
        );

        if (!list) {
          return;
        }

        list.tasks.push({
          _id: uuidv4(),
          content: action.payload.content,
        });

        break;
      }
      case REMOVE_TASK: {
        const list = draft.lists.find(
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
        break;
      }

      case ON_DRAG_END: {
        return handleDragEnd(draft, action.payload.result);
      }

      default:
        return;
    }
  },
  initialState
);
