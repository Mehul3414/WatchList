import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie(state, action) {
      const newMovie = action.payload;
      // Check if the movie title already exists
      const existingMovie = state.movies.find(movie => movie.title === newMovie.title);
      if (!existingMovie) {
        state.movies.push(newMovie);
      }
    },
    editMovie(state, action) {
      const updatedMovie = action.payload;
      const index = state.movies.findIndex(movie => movie.id === updatedMovie.id);
      if (index !== -1) {
        state.movies[index] = updatedMovie;
      }
    },
    deleteMovie(state, action) {
      const id = action.payload;
      state.movies = state.movies.filter(movie => movie.id !== id);
    },
    toggleWatched(state, action) {
      const id = action.payload;
      const index = state.movies.findIndex(movie => movie.id === id);
      if (index !== -1) {
        state.movies[index].watched = !state.movies[index].watched;
      }
    },
    reviewMovie(state, action) {
      const { id, rating, review } = action.payload;
      const index = state.movies.findIndex(movie => movie.id === id);
      if (index !== -1) {
        state.movies[index].rating = rating;
        state.movies[index].review = review;
      }
    },
  },
});

export const { addMovie, editMovie, deleteMovie, toggleWatched, reviewMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
