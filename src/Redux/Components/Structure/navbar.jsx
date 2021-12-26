import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = {
  width: '100px',
  padding: '6px 12px',
  margin: '0 6px 6px',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <NavLink
        to="/"
        exact
        style={Link}
        activeStyle={{ background: 'darkgreen' }}
      >
        Про нас
      </NavLink>
      <NavLink
        to="/products"
        exact
        style={Link}
        activeStyle={{ background: 'darkgreen' }}
      >
        Категорії
      </NavLink>
      <NavLink
        to="/products"
        exact
        style={Link}
        activeStyle={{ background: 'darkgreen' }}
      >
        Архів подій
      </NavLink>
      <NavLink
        to="/products"
        exact
        style={Link}
        activeStyle={{ background: 'darkgreen' }}
      >
        Логін
      </NavLink>      
    </div>
  );
};

export default Navbar;
