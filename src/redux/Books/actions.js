import { bookAdded, bookRemoved } from './actionTypes';

export const addBook = (title, author, topic) => ({
  type: bookAdded,
  payload: {
    title,
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
