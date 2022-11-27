import { useState } from 'react';
import { fetchPopularForToday } from 'fetchData';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import s from './TrendingMovies.module.css';

const TrendingMovies = () => {
  const [popularFilms, setPopularFilms] = useState([]);

  useEffect(() => {
    fetchPopularForToday().then(data => {
      setPopularFilms(data.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul className={s.trendingMovies}>
        {popularFilms.map(
          film =>
            film.title && (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`}>{film.title}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default TrendingMovies;
