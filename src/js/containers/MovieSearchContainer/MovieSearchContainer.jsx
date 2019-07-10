import React from 'react';
import { searchMovie, getMovie } from './searchActions';


export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(searchMovie(value));
  }

  handleSubmit() {
    const { dispatch, movie } = this.props;
    dispatch(getMovie(movie));
  }

  render() {
    const { value } = this.props;
    return (
      <div style={ { marginTop: '20px', marginBottom: '20px' } }>
        <div>
          <h1>Movie Finder</h1>
        </div>
        <div className='input-group'>
          <input type='text' className='form-control' placeholder='Enter A Movie' value={ value } onChange={ this.handleSearch } />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={ this.handleSubmit }>Go!</button>
          </div>
        </div>
      </div>
    );
  }
}

