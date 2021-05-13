import Todos from '../Todos';
import { Helmet } from 'react-helmet';
import { withConnect } from './withConnect';
import { Props } from './types';

const App = ({ title }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Todos />
    </>
  );
};

export default withConnect(App);
