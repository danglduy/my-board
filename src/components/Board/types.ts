import { DropResult } from '@hello-pangea/dnd';
import { List, Task } from 'store/Board/slice';

export interface StateProps {
  readonly lists: List[];
}

export interface DispatchProps {
  readonly updateTask: (listId: string, task: Task) => void;
  readonly addTask: (listId: string, content: string) => void;
  readonly removeTask: (listId: string, taskId: string) => void;
  readonly onDragEnd: (result: DropResult) => void;
}

export interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
