import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import AditionalInfo from 'components/AditionalInfo/AditionalInfo';

const Movie = () => {
  return (
    <>
      <MovieDetails />
      <AditionalInfo />
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
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movie;
