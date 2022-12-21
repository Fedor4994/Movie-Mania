import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { MdLocalFireDepartment } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';

const Navigation = () => {
  const setClassName = ({ isActive }) =>
    isActive ? s.activeNavigationLink : s.navigationLink;

  return (
    <nav className={s.navigation}>
      <NavLink className={setClassName} to="/">
        <MdLocalFireDepartment />
        Trending
      </NavLink>
      <NavLink className={setClassName} to="/movies">
        <BiSearchAlt />
        Search
      </NavLink>
    </nav>
  );
};

export default Navigation;
