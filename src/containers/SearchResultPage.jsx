import React, {Component} from 'react';
// import React from 'react';
// import SearchFilmRow from './SearchFilmRow.jsx';
// import axios from 'axios'
import {Link} from 'react-router'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar.jsx';
import Card from '../components/Card.jsx'
// import DetailedCard from './DetailedCard.jsx'


export default class SearchResultPage extends Component {


  state = {
    movies: [],
    currentMovie: null,
  }

  componentDidMount() {
    this.setState({movies: this.props.searchResults})
  }

  // componentDidMount(){
  //   timeline = new TL.Timeline('timeline-embed',
  //      'https://docs.google.com/spreadsheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml');
  // }


  selectMovie = (movie) => {
    this.setState({ currentMovie: movie })
  }

  render() {

    return (
      <div>
        <NavBar
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}
        />
        <h1>
          <Link to="/movies">Back to Home</Link>
        </h1>
        <h1>Here are your search results</h1>
        <h2>Your search has yielded {this.props.searchResults.length} results</h2>
          <div className="search-film-row col-md-12 col-sm-12 col-xs-12">
            {
              this.props.searchResults.map((movie, index) => {
                return (
                  <Card
                    key={index}
                    movieData={movie}
                    selectMovie={this.selectMovie}
                    showCard={this.state.currentMovie}
                  />
                );
        //         {window.timeline = new sheets/d/1cWqQBZCkX9GpzFtxCWHoqFXCHg-ylTVUWlnrdYMzKUI/pubhtml')}
            // {this.state.currentMovie ? <DetailedCard currentMovie={this.state.currentMovie} /> : null}
              })
            }
          </div>
      </div>
    );
  }
}
        // <SearchFilmRow
        //   currentMovies={this.props.searchResults}
        // />
