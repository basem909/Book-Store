import { createStore, combineReducers } from 'redux';
import cateReducer from './Categories/categories';
import bookReducer from './Books/books';

const reducers = combineReducers({
  books: bookReducer,
  categories: cateReducer,
});
const store = createStore(reducers);

export default store;
