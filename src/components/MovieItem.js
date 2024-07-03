import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleWatched, deleteMovie } from '../redux/slices/moviesSlice';
import { Link } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const handleToggleWatched = () => {
    dispatch(toggleWatched(movie.id));
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${movie.title}"?`)) {
      dispatch(deleteMovie(movie.id));
    }
  };

  return (
    <div className="movie-item">
      <div className="movie-details">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Release Year: {movie.releaseYear}</p>
        <p>Genre: {movie.genre}</p>
      </div>
      <div className="movie-actions">
        <button onClick={handleToggleWatched}>
          {movie.watched ? 'Mark as Unwatched' : 'Mark as Watched'}
        </button>
        <Link to={`/edit/${movie.id}`} className="btn">
          Edit
        </Link>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default MovieItem;
