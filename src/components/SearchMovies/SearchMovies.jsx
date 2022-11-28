import { fetchMoviesByQuery } from 'fetchData';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import s from './SearchMovies.module.css';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const handleInput = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (movieName !== '') {
      fetchMoviesByQuery(movieName).then(data => {
        setFoundMovies(data.results);
      });
    }
  }, [movieName]);

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      setQuery('');
      return;
    }

    fetchMoviesByQuery(query).then(data => {
      setFoundMovies(data.results);

      setSearchParams({ query });
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

      {movieName && (
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
      )}
    </>
  );
};

export default SearchMovies;