import { Props } from './types';

const TodoItem = ({ todo, updateTodo, removeTodo }: Props) => {
  const handleItemClick = () => {
    updateTodo({ ...todo, visibility: !todo.visibility });
  };

  const handleRemoveTodo = () => {
    removeTodo(todo._id);
  };

  return (
    <>
      <span
        style={{
          textDecorationLine: todo.visibility ? 'line-through' : undefined,
        }}
        onClick={handleItemClick}
      >
        {todo.content}
      </span>
      <span onClick={handleRemoveTodo}> x</span>
    </>
  );
};

export default TodoItem;
