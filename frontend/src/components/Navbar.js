import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link">About me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;