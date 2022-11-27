const KEY = 'abf5df7d75a67bd02b3b1e4ead1fc14d';

export async function fetchPopularForToday() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`
  );

  const data = await response.json();
  return data;
}

export async function fetchFilmById(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`
  );

  const data = await response.json();
  return data;
}

export async function fetchActorsByMovieId(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchReviewsByMovieId(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
  );
  const data = await response.json();
  return data;
}

export async function fetchMoviesByQuery(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${query}`
  );
  const data = await response.json();
  return data;
}
