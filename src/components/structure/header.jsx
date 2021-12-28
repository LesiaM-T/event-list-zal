import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import './structureComponents.scss';

const Header = () => {
  return (
    <div className="Header">
      <Navbar />
      <h1 id="siteTitle">
        <NavLink to="https://www.facebook.com/Zalishchykyturystychni">
          <h1>Події в твоєму місті </h1>
          <h2>Заліщики</h2>
        </NavLink>
      </h1>
    </div>
  );
};

export default Header;
