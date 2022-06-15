import { bookAdded, bookRemoved } from './actionTypes';

export const addBook = (bookTitle, author) => ({
  type: bookAdded,
  payload: {
    bookTitle,
    author,
  },
});

export const removeBook = (id) => ({
  type: bookRemoved,
  payload: {
    id,
  },
});
