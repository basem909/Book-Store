import { bookAdded, bookRemoved } from './actionTypes';

const bookReducer = function reducer(state = [], action) {
  switch (action.type) {
    case bookAdded:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.bookTitle,
          author: action.payload.author,
        },
      ];

    case bookRemoved:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default bookReducer;
