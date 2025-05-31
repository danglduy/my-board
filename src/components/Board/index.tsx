import styled from '@emotion/styled';
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { Props } from './types';
import { withConnect } from './withConnect';
import TaskList from '../TaskList';

const Container = styled.div`
  display: flex;
  padding: 30px;
`;

const Board = ({ lists, onDragEnd }: Props) => {
  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <Draggable key={list._id} draggableId={list._id} index={index}>
                  {(provided) => (
                    <TaskList
                      innerRef={provided.innerRef}
                      dragHandleProps={provided.dragHandleProps || undefined}
                      draggableProps={provided.draggableProps}
                      key={list._id}
                      list={list}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default withConnect(Board);
