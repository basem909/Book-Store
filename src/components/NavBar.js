import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/" className="nav-link">BOOKS</Link>
      <Link to="/Categories" className="nav-link">CATEGORIES</Link>
    </nav>
  );
}
