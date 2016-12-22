import React, {Component} from 'react';
import SearchFilmRow from './SearchFilmRow.jsx';
import axios from 'axios'
import {Link} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar.jsx';


export default class SearchResultPage extends Component {

  // componentWillUpdate(nextProps) {
  //   console.log(nextProps.searchResults)
  // }

  render() {
    let props = this.props

    return (
      <div>
        <NavBar
          updateMoviesFromSearchResult={props.updateMoviesFromSearchResult}
          updateToSearchResults={props.updateToSearchResults}
        />
        <h1>
          <Link to="/">Back to Home</Link>
        </h1>
        <h1>Here are your search results</h1>
        <h2>Your search has yielded {props.searchResults.length} results</h2>
        <SearchFilmRow
          currentMovies={props.searchResults}
        />
      </div>
    );
  }
}




//   console.log(333, props)

//   return null
// }

  // state = {
  //   movies: []
  // }

// var query = window.location.search
// // var url = `http://0.0.0.0:3000/adv_searches/${query}`

// class SearchResultPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: `http://0.0.0.0:3000/adv_searches/${query}`
//     }
//   }

//   // componentDidMount() {
    // axios.get('http://0.0.0.0:3000/results')
    // .then((response) => {
    //   console.log(response)
    //   // this.setState({ movies: response.data })
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
//   // }

// console.log(props.searchResults)
// console.log(props.movies)

//   setCurrentMovieAndCard = (movie, genre) => {
//     // console.log('setCurrentMovieAndCard inside SearchResultPage')
//     this.setState({
//       currentMovie: movie,
//       currentGenre: genre
//     })
//   }


            // card={this.state.currentGenre}
            // setMovie={this.setCurrentMovieAndCard}
            // query={this.state.searchQuery}
            // rowGenre="Action"
