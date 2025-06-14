import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import rootReducer from 'store/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
