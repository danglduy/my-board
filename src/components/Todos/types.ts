import { Todo } from 'store/Todos/reducer';

export interface StateProps {
  readonly todos: Todo[];
}

export interface DispatchProps {
  readonly updateTodo: (todo: Todo) => void;
  readonly addTodo: (content: string, visibility: boolean) => void;
  readonly removeTodo: (_id: string) => void;
  readonly reorderTodos: (
    sourceIndex: number,
    destinationIndex: number
  ) => void;
}

export interface OwnProps {}

export type Props = StateProps & DispatchProps & OwnProps;
