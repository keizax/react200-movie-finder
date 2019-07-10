const axios = require('axios');
// Action Creators
export const getMovie = movie => ({
  type: 'GET_MOVIE',
  payload: axios.get(`/movies/${movie}`)
});

export const searchMovie = movie => ({
  type: 'UPDATE_SEARCH',
  payload: { movie }
});
