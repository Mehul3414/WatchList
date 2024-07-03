// Mock API service. Replace with real API calls if needed.

const mockMovies = [
    // Example movies
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', releaseYear: 2010, genre: 'Sci-Fi', watched: false, rating: 5, review: 'Great movie!' },
    { id: 2, title: 'Interstellar', description: 'A journey through space and time', releaseYear: 2014, genre: 'Sci-Fi', watched: false, rating: 4, review: 'Amazing visuals.' }
  ];
  
  export const getMovies = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockMovies);
      }, 1000);
    });
  };
  
  export const addMovie = (movie) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        mockMovies.push(movie);
        resolve(movie);
      }, 500);
    });
  };
  
  export const editMovie = (id, data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockMovies.findIndex(movie => movie.id === id);
        if (index !== -1) {
          mockMovies[index] = { ...mockMovies[index], ...data };
        }
        resolve(mockMovies[index]);
      }, 500);
    });
  };
  
  export const deleteMovie = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockMovies.findIndex(movie => movie.id === id);
        if (index !== -1) {
          mockMovies.splice(index, 1);
        }
        resolve(true);
      }, 500);
    });
  };
  
  export const toggleWatched = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const movie = mockMovies.find(movie => movie.id === id);
        if (movie) {
          movie.watched = !movie.watched;
        }
        resolve(movie);
      }, 500);
    });
  };
  
  export const rateMovie = (id, rating) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const movie = mockMovies.find(movie => movie.id === id);
        if (movie) {
          movie.rating = rating;
        }
        resolve(movie);
      }, 500);
    });
  };
  
  export const reviewMovie = (id, review) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const movie = mockMovies.find(movie => movie.id === id);
        if (movie) {
          movie.review = review;
        }
        resolve(movie);
      }, 500);
    });
  };
  