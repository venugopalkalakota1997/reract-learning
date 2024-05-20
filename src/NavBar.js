import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
    <Link to="/assignment1">Assignment1</Link>
      &nbsp;
    <Link to="/assignment2">Assignment2</Link>
    </nav>
  );
}

export default NavBar;
