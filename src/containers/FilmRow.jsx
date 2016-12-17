import React, {Component} from 'react';
import Card from '../components/Card.jsx';

const data = require('./media.json');

class FilmRow extends Component {

  render() {
    const movies = data.movies;

    return (
      <div className="row">
        <h2 className="film-row-title">
          Row Title
        </h2>

        <div className="film-row col-md-12 col-sm-12 col-xs-12">
          {
            movies.map((movie) => {
              return (
                <Card movieData={movie}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default FilmRow;
