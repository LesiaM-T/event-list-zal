import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className="Header">
      <Navbar />
      <h1 id="siteTitle">
        <NavLink to="https://www.facebook.com/Zalishchykyturystychni">
          <span>V</span>
          <span>i</span>
          <span>s</span>
          <span>u</span>
          <span>a</span>
          <span>l</span> <span>Shop</span>
        </NavLink>
      </h1>
    </div>
  );
};

export default Header;
