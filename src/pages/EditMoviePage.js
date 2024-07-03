import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import AddEditMovieForm from '../components/AddEditMovieForm';
import './AddEditPage.css';

const EditMoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = useSelector(state =>
    state.movies.movies.find(movie => movie.id === parseInt(id))
  );

  const handleSave = () => {
    navigate('/');
  };

  return (
    <div className="add-edit-page container">
      <h1>Edit Movie</h1>
      {movie ? (
        <AddEditMovieForm existingMovie={movie} onSave={handleSave} />
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default EditMoviePage;
