import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
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
    const category = document.getElementById('category');
    const idCounter = uuidv4();
    dispatcher(addBook(title.value, author.value, category.value, idCounter));
    title.value = '';
    author.value = '';
    category.value = '';
  };
  const clickHandler = (id) => {
    dispatcher(removeBook(id));
  };

  return (
    <div className='books-container'>
      {booksList.map((book) => (
        <div key={book.id} className="book-section">
          <Book
            category={book.category}
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
