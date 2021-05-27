import { DropResult } from 'react-beautiful-dnd';
import { Reducer } from 'redux';
import { Action } from 'store/types';
import { v4 as uuidv4 } from 'uuid';
import { ADD_TASK, REMOVE_TASK, UPDATE_TASK, ON_DRAG_END } from './actionTypes';

const reorderItems = <T extends Task | List>(
  items: Array<T>,
  sourceIndex: number,
  destinationIndex: number
): Array<T> => {
  const result = [...items];
  const [removed] = result.splice(sourceIndex, 1);
  result.splice(destinationIndex, 0, removed);
  return result;
};

const handleDragEnd = (state: BoardState, result: DropResult): BoardState => {
  const { destination, source, type } = result;

  if (!destination) {
    return state;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return state;
  }

  if (type === 'column') {
    return {
      ...state,
      lists: reorderItems(state.lists, source.index, destination.index),
    };
  }

  if (source.droppableId === destination.droppableId) {
    const resultList = state.lists.find(
      (list) => list._id === source.droppableId
    );

    if (!resultList) {
      return state;
    }

    return {
      ...state,
      lists: state.lists.map((list) =>
        list._id === source.droppableId
          ? {
              ...list,
              tasks: reorderItems(list.tasks, source.index, destination.index),
            }
          : list
      ),
    };
  }

  const startList = state.lists.find((list) => list._id === source.droppableId);
  const destinationList = state.lists.find(
    (list) => list._id === destination.droppableId
  );

  if (!startList || !destinationList) {
    return state;
  }
  const newStartListTasks = [...startList.tasks];
  const [movedTask] = newStartListTasks.splice(source.index, 1);
  const newDestinationListTasks = [...destinationList.tasks];
  newDestinationListTasks.splice(destination.index, 0, movedTask);

  return {
    ...state,
    lists: state.lists.map((list) => {
      if (list._id === source.droppableId) {
        return { ...list, tasks: newStartListTasks };
      } else if (list._id === destination.droppableId) {
        return { ...list, tasks: newDestinationListTasks };
      } else {
        return list;
      }
    }),
  };
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

export const boardReducer: Reducer<BoardState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_TASK: {
      return {
        ...state,
        lists: state.lists.map((list) =>
          list._id === action.payload.listId
            ? {
                ...list,
                tasks: list.tasks.map((task) =>
                  task._id === action.payload.task._id
                    ? { ...action.payload.task }
                    : task
                ),
              }
            : list
        ),
      };
    }
    case ADD_TASK: {
      return {
        ...state,
        lists: state.lists.map((list) =>
          list._id === action.payload.listId
            ? {
                ...list,
                tasks: [
                  ...list.tasks,
                  {
                    _id: uuidv4(),
                    content: action.payload.content,
                  },
                ],
              }
            : list
        ),
      };
    }
    case REMOVE_TASK: {
      return {
        ...state,
        lists: state.lists.map((list) =>
          list._id === action.payload.listId
            ? {
                ...list,
                tasks: list.tasks.filter(
                  (task) => task._id !== action.payload.taskId
                ),
              }
            : list
        ),
      };
    }
    case ON_DRAG_END: {
      return handleDragEnd(state, action.payload.result);
    }
    default:
      return state;
  }
};
