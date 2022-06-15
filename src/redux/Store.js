import { createStore, combineReducers } from 'redux';
import { reducer as cateReducer } from './Categories/categories';
import { reducer as bookReducer } from './Books/books';

const reducers = combineReducers({
  books: bookReducer,
  categories: cateReducer,
});
const store = createStore(reducers);

export default store;
