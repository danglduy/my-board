import styled from '@emotion/styled';
import { Props } from './types';
import { withConnect } from './withConnect';
import TaskItem from '../TaskItem';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';

const Container = styled.div`
  display: flex;
  padding: 30px;
`;

const TaskListTitle = styled.h3`
  padding: 8px;
`;

const TaskListContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  width: 400px;
  background: #d6d6d6;
  display: flex;
  flex-direction: column;
`;

const TaskList = styled.div`
  padding: 8px;
`;

const TaskContainer = styled.div`
  border: 2px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  background: #fff;
  display: flex;
  justify-content: space-between;
`;

const Board = ({ lists, updateTask, removeTask, onDragEnd }: Props) => {
  const getItemStyle = (
    _isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ): object => ({
    margin: '0.75rem 0 0', // Temporary

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-lists" direction="horizontal" type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {lists.map((list, index) => (
                <Draggable key={list._id} draggableId={list._id} index={index}>
                  {(provided) => (
                    <TaskListContainer
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <TaskListTitle {...provided.dragHandleProps}>
                        {list.title}
                      </TaskListTitle>
                      <Droppable key={list._id} droppableId={list._id}>
                        {(provided, _snapshot) => (
                          <TaskList
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {list.tasks.map((task, index) => (
                              <Draggable
                                key={task._id}
                                draggableId={task._id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <TaskContainer
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <TaskItem
                                      key={task._id}
                                      listId={list._id}
                                      task={task}
                                      removeTask={removeTask}
                                      updateTask={updateTask}
                                    />
                                  </TaskContainer>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </TaskList>
                        )}
                      </Droppable>
                    </TaskListContainer>
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
