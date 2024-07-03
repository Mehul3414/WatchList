import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';

const MovieList = () => {
  const movies = useSelector(state => state.movies.movies);

  return (
    <div>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
