import { fetchMoviesByQuery } from 'fetchData';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './SearchMovies.module.css';
import MoivesList from 'components/MoivesList/MoivesList';
import Pagination from 'components/Pagination/Pagination';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const moviePage = searchParams.get('page') ?? '';

  const handleInput = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (movieName !== '') {
      setPage(Number(moviePage));
      fetchMoviesByQuery(movieName, Number(moviePage)).then(data => {
        console.log(moviePage);
        setTotalPages(data.total_pages);
        setFoundMovies(data.results);
      });
    }
  }, [movieName, page, moviePage]);

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      setQuery('');
      return;
    }

    fetchMoviesByQuery(query).then(data => {
      setPage(1);
      setTotalPages(data.total_pages);
      setFoundMovies(data.results);

      setSearchParams({ query, page: 1 });

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

      {movieName && (
        <>
          <MoivesList movies={foundMovies} />

          <Pagination
            page={page}
            totalPages={totalPages}
            onDecrement={pg => {
              setSearchParams({ query: movieName, page: pg });
              setPage(pg);
            }}
            onIncrement={pg => {
              setSearchParams({ query: movieName, page: pg });
              setPage(pg);
            }}
          />
        </>
      )}
    </>
  );
};

export default SearchMovies;
