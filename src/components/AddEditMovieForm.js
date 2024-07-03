import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../redux/slices/moviesSlice';
import { searchMovie, getMovieDetails } from '../services/tmdb';
import './AddEditMovieForm.css';

const AddEditMovieForm = ({ existingMovie, onSave }) => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(existingMovie || {
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
  });

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (movie.title && !existingMovie) {
        const searchResult = await searchMovie(movie.title);
        if (searchResult) {
          const movieDetails = await getMovieDetails(searchResult.id);
          setMovie({
            title: movieDetails.title,
            description: movieDetails.overview,
            releaseYear: movieDetails.release_date ? movieDetails.release_date.split('-')[0] : '',
            genre: movieDetails.genres.map(g => g.name).join(', '),
          });
        }
      }
    };

    fetchMovieDetails();
  }, [movie.title, existingMovie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingMovie) {
      dispatch(editMovie({ id: existingMovie.id, data: movie }));
    } else {
      dispatch(addMovie({ ...movie, id: Date.now() }));
    }
    onSave();
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={movie.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          name="description"
          value={movie.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="releaseYear"
          value={movie.releaseYear}
          onChange={handleChange}
          placeholder="Release Year"
        />
        <input
          type="text"
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddEditMovieForm;
