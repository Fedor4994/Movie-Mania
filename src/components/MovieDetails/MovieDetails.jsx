import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmById } from 'fetchData';
import { useState, useEffect } from 'react';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  const getGeners = genresArr => {
    const geners = genresArr.map(genre => genre.name).join(', ');
    return geners;
  };

  useEffect(() => {
    fetchFilmById(Number(movieId)).then(data => {
      setFilm(data);
    });
  }, [movieId]);

  return (
    film && (
      <div className={s.movieContainer}>
        <img
          className={s.moviePoster}
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
        />
        <div className={s.movieInfo}>
          <h2 className={s.movieTitle}>{`${
            film.title
          } (${film.release_date.slice(0, 4)})`}</h2>
          <p className={s.movieText}>
            {`User score: ${
              film.vote_average && parseInt(film.vote_average * 10)
            }%`}
          </p>
          <h3 className={s.movieText}>{film.overview && 'Overview'}</h3>
          <p className={s.movieText}>{film.overview}</p>
          <h3 className={s.movieText}>{getGeners(film.genres) && 'Genres'}</h3>
          <p className={s.movieText}>{getGeners(film.genres)}</p>
        </div>
      </div>
    )
  );
};

export default MovieDetails;
