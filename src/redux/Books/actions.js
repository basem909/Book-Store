import { bookAdded, bookRemoved } from './actionTypes';

export const addBook = (bookTitle, author, topic) => ({
  type: bookAdded,
  payload: {
    bookTitle,
    author,
    topic,
  },
});

export const removeBook = (id) => ({
  type: bookRemoved,
  payload: {
    id,
  },
});
