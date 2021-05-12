import React from 'react';
import { Props } from './types';
import { withConnect } from './withConnect';

const App = ({ title, text, setTitle, setText }: Props) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <div>{title}</div>
      <input type="text" onChange={handleTitleChange} />
      <span>{text}</span>
      <input type="text" onChange={handleTextChange} />
    </>
  );
};

export default withConnect(App);
