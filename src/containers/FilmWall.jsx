import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';
import NavBar from './NavBar.jsx'

const categories = [
  'Action',
  'Drama',
  'Biography',
  'Set in Japan',
  'Vintage (released before 1970)',
  'Films Set Before the Common Era (BCE)',
  'Animated Films',
  'Films Set During WWII',
  // 'Set in China',
  // 'Recent Releases',
  // 'Set in Middle Ages',
  // 'Films set in this Millennium',
  // 'Critically Acclaimed Films',
  // 'Set in Ancient Rome or Greece',
]
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
        <NavBar
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}
        />
        <FilmRow
          className="film-row"
          rowGenre={categories[0]}
          card={this.state.currentCategory}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
          hideCard={this.hideCard}
        />
        <FilmRow
          className="film-row"
          rowGenre={categories[1]}
          card={this.state.currentCategory}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
          hideCard={this.hideCard}
        />
        <FilmRow
          className="film-row"
          rowGenre={categories[2]}
          card={this.state.currentCategory}
          currentMovie={this.state.currentMovie}
          setMovie={this.setCurrentMovieAndCard}
          hideCard={this.hideCard}
        />

      </div>
    );
  }
}
export default FilmWall;
