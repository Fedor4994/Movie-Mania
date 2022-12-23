import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThreeDots } from 'react-loader-spinner';
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
      <Suspense
        fallback={
          <div
            style={{
              height: '100vh',
              backgroundColor: 'rgba(17, 24, 39, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
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
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:paramsPage" element={<Home />} />
            <Route path="movies/" element={<Movies />} />
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
