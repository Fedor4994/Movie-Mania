import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation';

export const App = () => {
  const Home = lazy(() => import('views/Home'));
  const Movie = lazy(() => import('views/Movie'));
  const Movies = lazy(() => import('views/Movies'));
  const Cast = lazy(() => import('./Cast/Cast'));
  const Reviews = lazy(() => import('./Reviews/Reviews'));

  return (
    <div>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};
