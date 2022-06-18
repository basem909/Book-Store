import { Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import { showBooks } from './redux/Books/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showBooks());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title"> Bookstore CMS </h1>
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
