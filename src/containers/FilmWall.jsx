import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';

class FilmWall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMovie: null
    }
  }

  setCurrentMovie = (movie) => {
    this.setState({
      currentMovie: movie
    })
  }

  render() {
    return (
      <div className="container">

        <FilmRow movie={this.props.movies} />
        <FilmRow rowGenre="Action" loneCard={this.state.currentMovie} setMovie={this.setCurrentMovie}/>
        <FilmRow rowGenre="Drama" loneCard={this.state.currentMovie} setMovie={this.setCurrentMovie}/>

      </div>
    );
  }
}
export default FilmWall;
