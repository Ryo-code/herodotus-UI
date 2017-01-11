import React, {Component} from 'react';
// import React from 'react';
// import SearchFilmRow from './SearchFilmRow.jsx';
// import axios from 'axios'
// import {Link} from 'react-router'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar.jsx';
// import Card from '../components/Card.jsx'
// import DetailedCard from './DetailedCard.jsx'
import Coverflow from './Coverflow.jsx';
import MovieSubmission from './MovieSubmission.jsx'


export default class SearchResultPage extends Component {

  state = {
    movies: [],
    currentMovie: null,
    showForm: false,
  }

  componentDidMount() {
    this.setState({movies: this.props.searchResults})
  }

  selectMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  showSubmissionForm = () => {
    this.setState({showForm: true,})
  }

  handleClose = () => {
    this.setState({showForm: false,})
  }

  render() {

    return (
      <div className="container">
        <NavBar
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}
        />

        <h3>Your search has yielded {this.props.searchResults.length} results. Scroll or click through </h3>
        <p>Didn't find what you wanted? Add to the community! <button onClick={this.showSubmissionForm}>Submit a new movie</button>
          {this.state.showForm ? <MovieSubmission showForm={this.state.showForm} handleClose={this.handleClose}/> : null}
        </p>


        <h1>Interactive Timeline</h1>
        <Coverflow movies={this.props.searchResults}/>

          <div className="search-film-row col-md-12 col-sm-12 col-xs-12">
            {/*
              this.props.searchResults.map((movie, index) => {
                return (
                  <Card
                    key={index}
                    movieData={movie}
                    selectMovie={this.selectMovie}
                    showCard={this.state.currentMovie}
                  />
                );
              })
            */}
          </div>
          <br/>
          <br/>
      </div>
    );
  }
}
        // <SearchFilmRow
        //   currentMovies={this.props.searchResults}
        // />
