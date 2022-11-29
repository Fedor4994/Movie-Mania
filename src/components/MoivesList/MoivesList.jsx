import React from 'react';
import s from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoivesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.movies}>
      {movies.map(
        film =>
          film.title && (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default MoivesList;
