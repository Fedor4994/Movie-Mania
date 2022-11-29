import React from 'react';
import s from './AditionalInfo.module.css';
import { Link, useLocation } from 'react-router-dom';

const AditionalInfo = () => {
  const location = useLocation();

  return (
    <div className={s.AditionalInfo}>
      <p>Aditional Info</p>
      <ul>
        <li className={s.aditionLink}>
          <Link state={{ from: location.state?.from ?? '/' }} to="cast">
            Cast
          </Link>
        </li>
        <li className={s.aditionLink}>
          <Link state={{ from: location.state?.from ?? '/' }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AditionalInfo;
