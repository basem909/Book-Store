import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import NewBook from './NewBook';

const Books = () => {
  const booksList = useSelector((state) => state.books);
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
