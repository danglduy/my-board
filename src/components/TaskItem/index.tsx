import styled from '@emotion/styled';
import { withConnect } from './withConnect';
import { Props } from './types';

const TaskItem = ({ updateTask, removeTask, task, listId }: Props) => {
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

export default withConnect(TaskItem);
