import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';

import DetailedCard from './DetailedCard';
class FilmWall extends Component {
  constructor(props) {
    super(props)
    this.state = {currentMovie: ''}
  }

  updateCurrentMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  render() {
    // console.log(this.props.movies)
    return (
      <div className="container">

        <h1>Displaying {this.props.movies.length} movies</h1>
        <FilmRow moviesTest={this.props.movies} currentMovie={this.updateCurrentMovie}/>
        <FilmRow moviesTest={this.props.movies} currentMovie={this.updateCurrentMovie}/>

        <DetailedCard stuff={this.state.currentMovie} />
      </div>
    );
  }
}
// <DetailedCard/>
export default FilmWall;
