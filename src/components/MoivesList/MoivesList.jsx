import React from 'react';
import s from './MoviesList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const MoivesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.movies}>
      {movies.map(
        film =>
          film.title && (
            <li className={s.movieItem} key={film.id}>
              <Link
                className={s.movieCard}
                to={`/movies/${film.id}`}
                state={{ from: location }}
              >
                {film.poster_path ? (
                  <img
                    className={s.movieCardImage}
                    src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    alt={film.title}
                  />
                ) : (
                  <div className={s.noImg}></div>
                )}

                {film.title && (
                  <p className={s.movieName}>{film.title.slice(0, 33)}</p>
                )}
                <div className={s.movieCardWrapper}>
                  {film.release_date && <p>{film.release_date.slice(0, 4)}</p>}
                  {film.vote_average && (
                    <p className={s.vote}>
                      <AiFillStar size={10} /> {film.vote_average.toFixed(1)}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          )
      )}
    </ul>
  );
};

export default MoivesList;
