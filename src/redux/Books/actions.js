import { getApi, postApi, removeApi } from '../../components/API';
import { bookAdded, bookRemoved, ShowBooks } from './actionTypes';

export const addBook = (title, author, category, id) => async (dispatch) => {
  await postApi(title, author, category, id);
  dispatch({
    type: bookAdded,
    payload: {
      title,
      author,
      category,
      item_id: id,
    },
  });
};

export const removeBook = (id) => async (dispatch) => {
  await removeApi(id);
  dispatch({ type: bookRemoved, payload: { id } });
};

export function showBooks() {
  return async (dispatch) => {
    const books = await getApi();
    dispatch({ type: ShowBooks, payload: books });
  };
}
