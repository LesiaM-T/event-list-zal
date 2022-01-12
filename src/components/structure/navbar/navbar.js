import React from 'react';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD:src/components/structure/navbar/navbar.js
import Template from '../template/Template';
=======
>>>>>>> 08c7efd (navbar and footer):src/components/structure/navbar.js
import './navbar.scss';

const Navbar = () => (
  <>
    <nav className="navbar">
<<<<<<< HEAD:src/components/structure/navbar/navbar.js
    <Template>
      <div className="title">
        <img src="logo.png" alt="Logo" width="300" />
=======
      <div className="title">
        <img src="logo.png" alt="Logo" width="300" />
        
>>>>>>> 08c7efd (navbar and footer):src/components/structure/navbar.js
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
      </Template>
    </nav>
  </>
);

export default Navbar;
