import styled from '@emotion/styled';
import {
  Draggable,
  Droppable,
  DraggingStyle,
  NotDraggingStyle,
} from '@hello-pangea/dnd';
import TaskItem from '../TaskItem';
import { Props } from './types';

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

const TaskListWrapper = styled.div`
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

const getItemStyle = (
  _isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined
): object => ({
  margin: '0.75rem 0 0', // Temporary

  // styles we need to apply on draggables
  ...draggableStyle,
});

const TaskList = ({
  innerRef,
  list,
  draggableProps,
  dragHandleProps,
}: Props) => {
  return (
    <TaskListContainer {...draggableProps} ref={innerRef}>
      <TaskListTitle {...dragHandleProps}>{list.title}</TaskListTitle>
      <Droppable key={list._id} droppableId={list._id}>
        {(provided, _snapshot) => (
          <TaskListWrapper {...provided.droppableProps} ref={provided.innerRef}>
            {list.tasks.map((task, index) => (
              <Draggable key={task._id} draggableId={task._id} index={index}>
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
                    <TaskItem key={task._id} listId={list._id} task={task} />
                  </TaskContainer>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </TaskListWrapper>
        )}
      </Droppable>
    </TaskListContainer>
  );
};

export default TaskList;
