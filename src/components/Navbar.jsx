import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ inactive, toggleoff }) => {
  return (
    <nav
      className={`navbar-menu navbar navbar-expand-lg navbar-dark  ${
        inactive ? 'inactive' : ''
      } ${toggleoff ? 'toggleoff' : ''}`}
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tentang-kami" className="nav-link">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
