import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddEditMovieForm from '../components/AddEditMovieForm';
import './AddEditPage.css';

const AddMoviePage = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/');
  };

  return (
    <div className="add-edit-page container">
      <h1>Add Movie</h1>
      <AddEditMovieForm onSave={handleSave} />
    </div>
  );
};

export default AddMoviePage;
