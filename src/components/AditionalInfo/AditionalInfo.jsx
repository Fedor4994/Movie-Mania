import React from 'react';
import s from './AditionalInfo.module.css';
import { Link } from 'react-router-dom';

const AditionalInfo = () => {
  return (
    <div className={s.AditionalInfo}>
      <p>Aditional Info</p>
      <ul>
        <li className={s.aditionLink}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={s.aditionLink}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default AditionalInfo;
