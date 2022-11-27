import React from 'react';
import { Outlet } from 'react-router-dom';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import AditionalInfo from 'components/AditionalInfo/AditionalInfo';

const Movie = () => {
  return (
    <>
      <MovieDetails />
      <AditionalInfo />
      <Outlet />
    </>
  );
};

export default Movie;
