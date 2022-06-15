import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './redux/Store';
import { addBook, removeBook } from './redux/Books/actions';
import { statusChecker } from './redux/Categories/actions';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);

store.dispatch(addBook('the impossible', 'farouk'));
store.dispatch(addBook('the impossible 2', 'ahed'));
store.dispatch(addBook('the impossible 3', 'zaki'));

store.dispatch(removeBook(2));
store.dispatch(addBook('the impossible 2', 'ahead'));
store.dispatch(removeBook(3));
store.dispatch(addBook('the impossible 2', 'ahead'));

store.dispatch(removeBook(1));
store.dispatch(statusChecker());


console.log(store.getState());
