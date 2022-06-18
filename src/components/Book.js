import React from "react";
import PropTypes from "prop-types";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const Book = ({ category, title, author, clickHandler, id }) => (
  <div className="book-container">
    <div className="book-banner">
      <h4>{category}</h4>
      <h3>{title}</h3>
      <h5>{author}</h5>
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
    </div>
    <div className="circle-container">
      <CircularProgressBar
        animationSmooth="1s ease-out"
        colorCircle="#f1f1f1"
        colorSlice="#FF6D00"
        percent={Math.floor(Math.random() * 100) + 15}
        linearGradient={["#379cf6", "#307bbe"]}
        size={150}
      />
      <h4>Completed</h4>
    </div>
    <div className="progress">
      <label>current chapter</label>
      <p>Chapter {Math.floor(Math.random() * 30)}</p>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
