import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Layout from 'views/Layout/Layout';

export const App = () => {
  const Home = lazy(() => import('views/Home'));
  const Movie = lazy(() => import('views/Movie'));
  const Movies = lazy(() => import('views/Movies'));
  const Cast = lazy(() => import('./Cast/Cast'));
  const Reviews = lazy(() => import('./Reviews/Reviews'));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<Movie />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
