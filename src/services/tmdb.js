import axios from 'axios';

const API_KEY = 'd8658cb3d72dec9ad7318b950a0701eb';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovie = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results[0]; // Return the first result
  } catch (error) {
    console.error('Error fetching movie data from TMDB', error);
    return null;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details from TMDB', error);
    return null;
  }
};
