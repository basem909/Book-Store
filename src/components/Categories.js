import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import statusChecker from '../redux/Categories/actions';

const Categories = () => {
  const categoriesList = useSelector((state) => state.categories);
  const dispatcher = useDispatch();

  return (
    <div className="category-container">
      <h2>{categoriesList}</h2>
      <button type="button" onClick={() => { dispatcher(statusChecker()); }}>CHECK STATUS</button>
    </div>
  );
};

export default Categories;
