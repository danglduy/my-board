import { LegacyRef } from 'react';
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import { List } from 'store/Board/slice';

export interface Props {
  readonly key: string;
  readonly innerRef: LegacyRef<HTMLDivElement> | undefined;
  readonly list: List;
  readonly draggableProps: DraggableProvidedDraggableProps | undefined;
  readonly dragHandleProps: DraggableProvidedDragHandleProps | undefined;
}
