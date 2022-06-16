import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import statusChecker from '../redux/Categories/actions';

const Categories = () => {
  const categoriesList = useSelector((state) => state.categories);
  const dispatcher = useDispatch();

  return (
    <>
      <h1>{categoriesList}</h1>
      <button type="button" onClick={() => { dispatcher(statusChecker()); }}>CHECK STATUS</button>
    </>
  );
};

export default Categories;
