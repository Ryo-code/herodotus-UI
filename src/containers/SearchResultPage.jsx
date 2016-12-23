import React, {Component} from 'react';
// import React from 'react';
import SearchFilmRow from './SearchFilmRow.jsx';
// import axios from 'axios'
import {Link} from 'react-router'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar.jsx';


export default class SearchResultPage extends Component {

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


