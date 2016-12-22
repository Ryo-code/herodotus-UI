import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';

const categories = ['Action', 'Drama', 'Biography', 'Set in Japan', 'Vintage', 'Before CE', 'Animation', 'World War 2']
const shuffleArray = (array) => {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}
shuffleArray(categories)

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
          rowGenre={categories[0]}
          card={this.state.currentGenre}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
        />
        <FilmRow
          rowGenre={categories[1]}
          card={this.state.currentGenre}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
        />

      </div>
    );
  }
}
export default FilmWall;
