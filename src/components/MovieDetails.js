import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Review from '../components/Review';


const MovieDetailsPage = () => {
  const { id } = useParams();
  const movie = useSelector(state =>
    state.movies.movies.find(movie => movie.id === parseInt(id))
  );

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="container">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Status: {movie.watched ? 'Watched' : 'Not Watched'}</p>
      <Link to={`/edit/${movie.id}`} className="btn">
        Edit
      </Link>
      <Review movieId={movie.id} />
    </div>
  );
};

export default MovieDetailsPage;
