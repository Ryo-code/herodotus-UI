import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';

class FilmWall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMovie: null,
      currentGenre: null
    }
  }

  setCurrentMovieAndCard = (movie, genre) => {
    this.setState({
      currentMovie: movie,
      currentGenre: genre
    })
  }

  render() {
    return (
      <div>

        <FilmRow
          rowGenre="Action"
          card={this.state.currentGenre}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
        />
        <FilmRow
          rowGenre="Drama"
          card={this.state.currentGenre}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
        />

      </div>
    );
  }
}
export default FilmWall;
