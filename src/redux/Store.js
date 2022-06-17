import {
  legacy_createStore as legacyCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cateReducer from './Categories/categories';
import bookReducer from './Books/books';

const reducers = combineReducers({
  books: bookReducer,
  categories: cateReducer,
});
const store = legacyCreateStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
