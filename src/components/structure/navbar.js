import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <nav className="navbar navbar-dark   navbar-expend-lg bg-primary">
      <div className="navbar-brand">події в твоєму місті</div>

      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            {' '}
            Головна
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            {' '}
            Інформація
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;
