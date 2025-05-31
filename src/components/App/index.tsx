import Board from '../Board';
import { withConnect } from './withConnect';
import { Props } from './types';

const App = ({ title }: Props) => {
  return (
    <>
      <title>{title}</title>
      <Board />
    </>
  );
};

export default withConnect(App);
