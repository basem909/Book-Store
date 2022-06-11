import React from 'react';
import Book from './Book';
import NewBook from './NewBook';

const Books = () => {
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

  const submitHandler = () => {};

  return (
    <div>
      {booksList.map((book) => (
        <div key={book.id} className="book-section">
          <Book topic={book.topic} title={book.title} author={book.author} />
        </div>
      ))}
      <NewBook onSubmit={submitHandler} />
    </div>
  );
};

export default Books;
