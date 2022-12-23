import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchFilmById } from 'fetchData';
import { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from './MovieDetails.module.css';
import { ImReply } from 'react-icons/im';

const MovieDetails = () => {
  const location = useLocation() || '';
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [film, setFilm] = useState(null);
  const { movieId } = useParams();

  const getGeners = genresArr => {
    const geners = genresArr.map(genre => genre.name).join(', ');
    return geners;
  };

  useEffect(() => {
    setIsLoading(true);
    fetchFilmById(Number(movieId)).then(data => {
      setFilm(data);
      setIsLoading(false);
    });
  }, [movieId]);

  const goBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <>
      {isLoading ? (
        <div className={s.loader}>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ccc"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        film && (
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
            <div className={s.buttonContainer}>
              <button className={s.goback} type="button" onClick={goBack}>
                <ImReply /> Go back
              </button>
            </div>

            <div className={s.movieContent}>
              {film.poster_path ? (
                <img
                  className={s.moviePoster}
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt={film.title}
                />
              ) : (
                <div className={s.noImg}></div>
              )}

              <div className={s.movieInfo}>
                <h2 className={s.movieTitle}>{`${
                  film.title
                } (${film.release_date.slice(0, 4)})`}</h2>
                <p className={s.movieText}>
                  {`User score: ${
                    film.vote_average && parseInt(film.vote_average * 10)
                  }%`}
                </p>
                <h3 className={s.movieSubTitle}>
                  {film.overview && 'Overview'}{' '}
                  <p className={s.movieText}>{film.overview}</p>
                </h3>

                <h3 className={s.movieSubTitle}>
                  {getGeners(film.genres) && 'Genres'}
                  <p className={s.movieText}>{getGeners(film.genres)}</p>
                </h3>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default MovieDetails;
