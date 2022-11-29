import { useState } from 'react';
import { fetchPopularForToday } from 'fetchData';
import { useEffect } from 'react';

import MoivesList from 'components/MoivesList/MoivesList';

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
      <MoivesList movies={popularFilms} />
    </div>
  );
};

export default TrendingMovies;
