import { fetchMoviesByQuery } from 'fetchData';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import debounce from 'lodash.debounce';
import s from './SearchMovies.module.css';
import MoivesList from 'components/MoivesList/MoivesList';
import Pagination from 'components/Pagination/Pagination';

const SearchMovies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const moviePage = searchParams.get('page') ?? '';

  const handleInput = event => {
    const query = event.target.value;
    if (query.trim() === '') {
      setSearchParams({ query: '', page: 1 });
      return;
    }
    if (query) {
      fetchMoviesByQuery(query).then(data => {
        setPage(1);
        setTotalPages(data.total_pages);
        setFoundMovies(data.results);

        setSearchParams({ query, page: 1 });
      });
    }
  };

  useEffect(() => {
    if (movieName !== '') {
      setIsLoading(true);
      setPage(Number(moviePage));
      fetchMoviesByQuery(movieName, Number(moviePage)).then(data => {
        setTotalPages(data.total_pages);
        setFoundMovies(data.results);
        setIsLoading(false);
      });
    }
  }, [movieName, page, moviePage]);

  return (
    <>
      <div className={s.searchForm}>
        <input
          placeholder="Search..."
          className={s.searchInput}
          onChange={debounce(handleInput, 500)}
          type="text"
        />
      </div>
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
        movieName &&
        foundMovies.length !== 0 && (
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
        )
      )}
    </>
  );
};

export default SearchMovies;
