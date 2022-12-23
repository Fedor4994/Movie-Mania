import { useState } from 'react';
import { fetchPopularForToday } from 'fetchData';
import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from './TrendingMovies.module.css';
import MoivesList from 'components/MoivesList/MoivesList';
import Pagination from 'components/Pagination/Pagination';
import { useNavigate, useParams } from 'react-router-dom';

const TrendingMovies = () => {
  const [popularFilms, setPopularFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { paramsPage } = useParams();

  const [page, setPage] = useState(Number(paramsPage) || 1);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    const isWorstParams =
      isNaN(Number(paramsPage)) || !paramsPage || paramsPage > 1000;
    !isWorstParams ? setPage(Number(paramsPage)) : navigate(`/${1}`);
    if (page > 1000) {
      return;
    }
    fetchPopularForToday(page).then(data => {
      setPopularFilms(data.results);
      setIsLoading(false);
    });
  }, [page, paramsPage, navigate]);

  return (
    <div className={s.trendingMovies}>
      <h1 className={s.trendingTitle}>Trending today</h1>
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
        <>
          <MoivesList movies={popularFilms} />
          <Pagination
            page={page}
            totalPages={1000}
            onDecrement={pg => {
              navigate(`/${page - 1}`);
              setPage(pg);
            }}
            onIncrement={pg => {
              navigate(`/${page + 1}`);
              setPage(pg);
            }}
          />
        </>
      )}
    </div>
  );
};

export default TrendingMovies;
