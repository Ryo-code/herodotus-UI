import React, {Component} from 'react';
import SearchFilmRow from './SearchFilmRow.jsx';
import axios from 'axios'
import {Link} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var query = window.location.search
// var url = `http://0.0.0.0:3000/adv_searches/${query}`

class SearchResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: `http://0.0.0.0:3000/adv_searches/${query}`
    }
  }

  // componentDidMount() {
  //   axios.get(url)
  //   .then((response) => {
  //     this.setState({ movies: response.data })
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }

  setCurrentMovieAndCard = (movie, genre) => {
    this.setState({
      currentMovie: movie,
      currentGenre: genre
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>
            <Link to="/">Back to Home</Link>
          </h1>
          <h1>Heare are your search results</h1>
          <SearchFilmRow
            query={this.state.searchQuery}
            rowGenre="Action"
            card={this.state.currentGenre}
            currentMovie={this.state.currentMovie}
            setMovie={this.setCurrentMovieAndCard}
          />

        </div>
      </MuiThemeProvider>
    );
  }
}


export default SearchResultPage;