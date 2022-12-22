import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchFilmById } from 'fetchData';
import { useState, useEffect } from 'react';
import s from './MovieDetails.module.css';
import { ImReply } from 'react-icons/im';

const MovieDetails = () => {
  const location = useLocation() || '';

  const navigate = useNavigate();

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

  const goBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    film && (
      <>
        <div
          style={{
            backgroundImage: `url(
              https://image.tmdb.org/t/p/w1280${film.backdrop_path}
            )`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className={s.movieContainer}
        >
          <button className={s.goback} type="button" onClick={goBack}>
            <ImReply /> Go back
          </button>
          <div className={s.movieContent}>
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
              <h3 className={s.movieText}>
                {getGeners(film.genres) && 'Genres'}
              </h3>
              <p className={s.movieText}>{getGeners(film.genres)}</p>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default MovieDetails;
