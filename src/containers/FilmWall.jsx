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
    return (
      <div className="container">

        <FilmRow moviesTest={this.props.movies} currentMovie={this.updateCurrentMovie}/>
        <FilmRow moviesTest={this.props.movies} currentMovie={this.updateCurrentMovie}/>

        <DetailedCard stuff={this.state.currentMovie} />
      </div>
    );
  }
}

export default FilmWall;
