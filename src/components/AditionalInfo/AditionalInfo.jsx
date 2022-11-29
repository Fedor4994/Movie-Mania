import React from 'react';
import s from './AditionalInfo.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const AditionalInfo = () => {
  const location = useLocation();

  const setClassName = ({ isActive }) => isActive && s.activeAditionalLink;

  return (
    <div className={s.AditionalInfo}>
      <p>Aditional Info</p>
      <ul>
        <li className={s.aditionLink}>
          <NavLink
            className={setClassName}
            state={{ from: location.state?.from ?? '/' }}
            to="cast"
          >
            Cast
          </NavLink>
        </li>
        <li className={s.aditionLink}>
          <NavLink
            className={setClassName}
            state={{ from: location.state?.from ?? '/' }}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AditionalInfo;
