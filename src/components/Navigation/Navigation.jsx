import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import s from './Navigation.module.css';
import { MdLocalFireDepartment } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';

const Navigation = () => {
  const { paramsPage } = useParams();

  const setTrendingClassName = ({ isActive }) => {
    if (paramsPage) {
      isActive = true;
    }
    return isActive ? s.activeNavigationLink : s.navigationLink;
  };
  const setClassName = ({ isActive }) => {
    return isActive ? s.activeNavigationLink : s.navigationLink;
  };

  return (
    <nav className={s.navigation}>
      <NavLink className={setTrendingClassName} to={`/${1}`}>
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
