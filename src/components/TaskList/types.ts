import { LegacyRef } from 'react';
import {
  DraggableProvidedDraggableProps,
  DraggableProvidedDragHandleProps,
} from 'react-beautiful-dnd';
import { List } from 'store/Board/reducer';

export interface Props {
  readonly key: string;
  readonly innerRef: LegacyRef<HTMLDivElement> | undefined;
  readonly list: List;
  readonly draggableProps: DraggableProvidedDraggableProps | undefined;
  readonly dragHandleProps: DraggableProvidedDragHandleProps | undefined;
}
