import { fetchMoviesByQuery } from 'fetchData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './SearchMovies.module.css';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  const handleInput = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchMoviesByQuery(query).then(data => {
      setFoundMovies(data.results);
      setQuery('');
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={s.searchInput}
          onChange={handleInput}
          type="text"
          value={query}
        />
        <button className={s.searchButton} type="submit">
          Search
        </button>
      </form>

      <ul className={s.foundFilms}>
        {foundMovies.map(
          film =>
            film.title && (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`}>{film.title}</Link>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default SearchMovies;
