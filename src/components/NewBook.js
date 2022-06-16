import React from 'react';

export default function newBook({ submitHandler }) {
  return (
    <div className="newBook-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="newBook" placeholder="Book Title" id="title" />
        <input type="text" name="newAuthor" placeholder="Author" id="author" />
        <input type="text" name="newTopic" placeholder="Book Topic" id="topic" />

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
