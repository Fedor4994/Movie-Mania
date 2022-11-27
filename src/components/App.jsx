import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'views/Home';
import Movie from 'views/Movie';
import Movies from 'views/Movies';
import Cast from './Cast/Cast';
import Navigation from './Navigation/Navigation';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
