import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  const setClassName = ({ isActive }) =>
    isActive ? s.activeNavigationLink : s.navigationLink;

  return (
    <nav className={s.navigation}>
      <NavLink className={setClassName} to="/">
        Home
      </NavLink>
      <NavLink className={setClassName} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
