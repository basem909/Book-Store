import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/Store';
import { addBook, removeBook } from './redux/Books/actions';
import statusChecker from './redux/Categories/actions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);

store.dispatch(addBook('book 1', 'author 1', 'action'));
store.dispatch(addBook('book 2', 'author 2', 'thriller'));
store.dispatch(addBook('book 3', 'author 3', 'horror'));

store.dispatch(addBook('book 2', 'author 2', 'sports'));
store.dispatch(addBook('book 4', 'author 4', 'tragedy'));
store.dispatch(statusChecker());
