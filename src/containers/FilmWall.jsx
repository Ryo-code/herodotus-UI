import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';

import DetailedCard from './DetailedCard';
// const data = require('./media.json');

// const movies = data.movies; //put in state

class FilmWall extends Component {

  render() {
    console.log(this.props.movies)
    return (
      <div className="container">


        <FilmRow moviesTest={this.props.movies}/>
        <FilmRow moviesTest={this.props.movies}/>

        <DetailedCard/>
      </div>
    );
  }
}
// <DetailedCard/>
export default FilmWall;
