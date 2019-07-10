import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

// This function takes the store and returns an object
// that's passed to the props of the component.
const mapStoreToProps = store => ({
  movies: store.movieData.movies
});

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(MovieSearchContainer);