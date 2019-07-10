const defaultState = {
  title: '',
  movies: [],
  movieInfo: []
};

export default function searchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MOVIE_FULFILLED': {
      return {
        ...state,
        movies: payload.movies,
        };
      }
    }

    case 'UPDATE_SEARCH': {
      return {
        ...state,
        movie: payload,
      };
    }

    default: return state;
