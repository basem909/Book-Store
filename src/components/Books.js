import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/Books/actions';
import Book from './Book';
import NewBook from './NewBook';

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatcher = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const topic = document.getElementById('topic');
    dispatcher(addBook(title.value, author.value, topic.value));
  };
  const clickHandler = (id) => {
    dispatcher(removeBook(id));
  };

  return (
    <div>
      {booksList.map((book) => (
        <div key={book.id} className="book-section">
          <Book
            topic={book.topic}
            title={book.title}
            author={book.author}
            id={book.id}
            clickHandler={clickHandler}
          />
        </div>
      ))}
      <NewBook submitHandler={submitHandler} />
    </div>
  );
};

export default Books;
