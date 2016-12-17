import React, { Component } from 'react';
import FilmRow from './FilmRow.jsx';
import DetailedCard from './DetailedCard';
const data = require('./media.json');

const movies = data.movies; //put in state

class FilmWall extends Component {
  render() {
    return (
      <div className="container">

        <FilmRow movies={movies.slice(0, 4)}/>
        <FilmRow movies={movies.slice(4, 8)}/>


        <DetailedCard
        />
      </div>
    );
  }
}

export default FilmWall;
