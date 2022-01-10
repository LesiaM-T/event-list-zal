import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="title">
        <img src="logo.png" alt="Logo" width="300" />
      </div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            {' '}
            Головна
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            {' '}
            Всі події
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
