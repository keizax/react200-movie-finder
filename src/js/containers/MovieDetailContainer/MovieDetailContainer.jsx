import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getInfo } from '../MovieSearchContainer/searchActions';

export default class MovieDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInfo(this.props.match.params.id));
  }

  render() {
    const { movieInfo } = this.props;
    return (
      <div>
        <div className='jumbotron text-center'>
          <h1>SDCS Movie Finder</h1>
        </div>
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <Link to='/' className='btn btn-outline-primary my-2 my-sm-0'>Go Back</Link>
              </div>
            </div>

            <div className='row'>
              <div className='col-6'>
                <div className='card'>
                  <div className='card-body'>
                    <img
                      className='img-fluid'
                      src={ movieInfo.Poster }
                      alt={ movieInfo.Title }
                    />
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='card'>
                  <div className='card-header text-white bg-secondary'>Movie Details</div>
                  <div className='card-body'>
                    <h3 className='card-title font-weight-bold'>{ movieInfo.Title }</h3>
                    <span className='badge badge-pill badge-success m-2'>Released: { movieInfo.Year }</span>
                    <span className='badge badge-pill badge-success m-2'>Length: { movieInfo.Runtime }</span>
                    <span className='badge badge-pill badge-success m-2'>Genre: { movieInfo.Genre }</span>
                    <p>{ movieInfo.Plot }</p>
                    <p>Awards: { movieInfo.Awards }</p>
                    <p className='font-weight-bold'>MetaScore: { movieInfo.Metascore }
                      <br />
                      <span>IMDB: { movieInfo.imdbRating }</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
