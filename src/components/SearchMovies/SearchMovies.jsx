import { fetchMoviesByQuery } from 'fetchData';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './SearchMovies.module.css';
import MoivesList from 'components/MoivesList/MoivesList';

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
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          className={s.searchInput}
          onChange={handleInput}
          type="text"
          value={query}
        />
      </form>

      {movieName && <MoivesList movies={foundMovies} />}
    </>
  );
};

export default SearchMovies;
