import styled from '@emotion/styled';
import { Props } from './types';

const TaskItem = ({ task, listId, updateTask, removeTask }: Props) => {
  const handleItemClick = () => {
    updateTask(listId, { ...task });
  };

  const handleRemoveTodo = () => {
    removeTask(listId, task._id);
  };

  const ClickableSpan = styled.span`
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <>
      <span onClick={handleItemClick}>{task.content}</span>
      <ClickableSpan onClick={handleRemoveTodo}>X</ClickableSpan>
    </>
  );
};

export default TaskItem;
