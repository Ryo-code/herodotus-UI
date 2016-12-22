import React, {Component} from 'react';
import SearchFilmRow from './SearchFilmRow.jsx';
import axios from 'axios'
import {Link} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


export default props => {
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

console.log(props.searchResults)
// console.log(props.movies)

//   setCurrentMovieAndCard = (movie, genre) => {
//     // console.log('setCurrentMovieAndCard inside SearchResultPage')
//     this.setState({
//       currentMovie: movie,
//       currentGenre: genre
//     })
//   }

  // render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1>
            <Link to="/">Back to Home</Link>
          </h1>
          <h1>Here are your search results</h1>
          <SearchFilmRow
            currentMovies={props.searchResults}
          />

        </div>
      </MuiThemeProvider>
    );
  // }
}

            // card={this.state.currentGenre}
            // setMovie={this.setCurrentMovieAndCard}
            // query={this.state.searchQuery}
            // rowGenre="Action"
