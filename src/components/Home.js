import React from 'react'
import FilmWall from '../containers/FilmWall.jsx';
import NavBar from '../containers/NavBar.jsx';
import LandingPage from '../containers/LandingPage.jsx'

export default props =>
  <div className="App">
    <NavBar
      updateMoviesFromSearchResult={props.updateMoviesFromSearchResult}
      updateToSearchResults={props.updateToSearchResults}
    />
    <LandingPage />
    <FilmWall />
  </div>