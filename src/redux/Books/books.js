import { bookAdded, bookRemoved } from './actionTypes';

const booksList = [
  {
    id: 1,
    topic: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    topic: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    topic: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];
const bookReducer = function reducer(state = booksList, action) {
  switch (action.type) {
    case bookAdded:
      return [
        ...state,
        {
          id: state.length + 1,
          topic: action.payload.topic,
          title: action.payload.title,
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
