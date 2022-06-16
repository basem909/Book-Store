import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  topic, title, author, clickHandler, id,
}) => (
  <div className="container">
    <h4>{topic}</h4>
    <h3>{title}</h3>
    <h4>{author}</h4>
    <div className="btn-container">
      <button type="button" disabled>
        Comments
      </button>
      |
      <button type="button" onClick={() => clickHandler(id)} id={id}>
        Remove
      </button>
      |
      <button type="button" disabled>
        Edit
      </button>
    </div>

    <button type="button">Update Progress</button>
  </div>
);

Book.propTypes = {
  topic: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
