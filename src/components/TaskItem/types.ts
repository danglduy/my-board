import React from 'react';
import { Task } from 'store/Board/reducer';

export interface StateProps {}

export interface DispatchProps {
  readonly updateTask: (listId: string, task: Task) => void;
  readonly removeTask: (listId: string, taskId: string) => void;
}

export interface OwnProps {
  key: React.Key | null | undefined;
  task: Task;
  listId: string;
}

export type Props = StateProps & DispatchProps & OwnProps;
