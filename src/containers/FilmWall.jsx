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
  'Set in China',
  'Recent Releases',
  'Set in Middle Ages',
  'Films set in this Millennium',
  'Critically Acclaimed Films',
  'Set in Ancient Rome or Greece',
]

// This takes the array of categorie and shuffles them
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
      currentCategory: null,
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
        <div className="results-text">
          <p>Don't know where to start? Refresh the page to see new categories of films, and click on them for more information. </p>
          <p>Looking for a film set in a specific time/place? Use the <i>search</i> button to show them in chronological order (by when their stories began).</p>
        </div>
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

        <br/>
        <div>
        <hr className='footer-line'/>
        </div>
          <p className="footer">The <i>Herodotus</i> web app comes from the creative minds of <a href="https://github.com/Jebbie87">Jeff Chang</a>, <a href="https://github.com/Ryo-code">Ryo MacPherson</a>, and <a href="https://github.com/SvemirskiHod">Joao Coelho</a>. <a href="mailto:jeffreycj.chang@gmail.com">Click here to email us</a></p>
      </div>

    );
  }
}
export default FilmWall;
