import React from 'react';
import PropTypes from 'prop-types';

export default function newBook({ submitHandler }) {
  return (
    <div className="newBook-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={submitHandler}>
        <input type="text" name="newBook" placeholder="Book Title" />
        <input type="text" name="newAuthor" placeholder="Author" />
        <input type="text" name="newTopic" placeholder="Book Topic" />

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

newBook.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};
