import React from 'react'
import FilmWall from '../containers/FilmWall.jsx';
import NavBar from '../containers/NavBar.jsx';

export default props =>
  <div className="App">
    <NavBar
      updateMoviesFromSearchResult={props.updateMoviesFromSearchResult}
      updateToSearchResults={props.updateToSearchResults}
    />
    <FilmWall movies={props.movies} user={props.user}/>
  </div>