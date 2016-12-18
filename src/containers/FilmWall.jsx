import React, { Component } from 'react';
import FilmRow from './FilmRow.jsx';
// import DetailedCard from './DetailedCard';
// const data = require('./media.json');

// const movies = data.movies; //put in state

class FilmWall extends Component {
  render() {
    console.log(this.props.movies)
    return (
      <div className="container">

        <FilmRow movies={this.props.movies.slice(0,4)}/>
        <FilmRow movies={this.props.movies.slice(5,8)}/>




      </div>
    );
  }
}
// <DetailedCard/>
export default FilmWall;
