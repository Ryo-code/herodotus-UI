import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';

const categories = ['Action', 'Drama', 'Biography', 'Set in Japan', 'Vintage', 'Before Common Era', 'Animation', 'World War 2']
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
      currentCategory: null
    }
  }

  setCurrentMovieAndCard = (movie, genre) => {
    this.setState({
      currentMovie: movie,
      currentCategory: genre
    })
  }

  hideCard = () => {
    this.setState({currentCategory: null})
  }

  render() {
    return (
      <div>

        <FilmRow
          className="film-row"
          rowGenre={categories[0]}
          card={this.state.currentCategory}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
          hideCard={this.hideCard}
          user={this.props.user}
        />
        <FilmRow
          className="film-row"
          rowGenre={categories[1]}
          card={this.state.currentCategory}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
          hideCard={this.hideCard}
          user={this.props.user}
        />

      </div>
    );
  }
}
export default FilmWall;
