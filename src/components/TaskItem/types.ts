import { Task } from 'store/Board/reducer';

export interface Props {
  task: Task;
  listId: string;
  updateTask: (listId: string, task: Task) => void;
  removeTask: (listId: string, taskId: string) => void;
}
