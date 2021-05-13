import { Props } from './types';
import { withConnect } from './withConnect';
import TodoItem from '../TodoItem';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  DraggingStyle,
  NotDraggingStyle,
} from 'react-beautiful-dnd';

const Todos = ({
  todos,
  updateTodo,
  addTodo,
  removeTodo,
  reorderTodos,
}: Props) => {
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    reorderTodos(source.index, destination.index);
  };

  const getItemStyle = (
    _isDragging: boolean,
    draggableStyle: DraggingStyle | NotDraggingStyle | undefined
  ): object => ({
    margin: '0.75rem 0 0', // TODO: Get current ListItem margin to apply on this property

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <>
      <h1>Things to do</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable key={todo._id} draggableId={todo._id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <TodoItem
                        key={todo._id}
                        todo={todo}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default withConnect(Todos);
