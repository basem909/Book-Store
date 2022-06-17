import { bookAdded, bookRemoved, ShowBooks } from './actionTypes';

const bookReducer = function reducer(state = [], action) {
  switch (action.type) {
    case bookAdded:
      return [
        ...state,
        {
          id: action.payload.id,
          category: action.payload.category,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];

    case bookRemoved:
      return state.filter((book) => book.id !== action.payload.id);

    case ShowBooks:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
