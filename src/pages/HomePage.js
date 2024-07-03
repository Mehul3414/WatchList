import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MovieItem from '../components/MovieItem';
import './HomePage.css';

const HomePage = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="home-page container">
      <h1>Movie Watchlist</h1>
      <Link to="/add" className="btn">
        Add Movie
      </Link>
      <ul className="movie-list">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
