import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/Books/actions";
import store from "../redux/Store";
import Book from "./Book";
import NewBook from "./NewBook";

const Books = () => {
  const booksList = useSelector((state) => state.books);
  const dispatcher = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const topic = document.getElementById("topic");
    dispatcher(addBook(title.value, author.value, topic.value));
  };

  return (
    <div>
      {booksList.map((book) => (
        <div key={book.id} className="book-section">
          <Book topic={book.topic} title={book.title} author={book.author} />
        </div>
      ))}
      <NewBook submitHandler={submitHandler} />
    </div>
  );
};

export default Books;
