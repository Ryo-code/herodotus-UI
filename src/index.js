import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SearchResultPage from './containers/SearchResultPage.jsx'
import Home from './components/Home.js'
import LandingPage from './containers/LandingPage.jsx'
import MovieSubmission from './containers/MovieSubmission.jsx'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
import FilmWall from './containers/FilmWall.jsx'
// import { browserHistory, Link, Route, IndexRoute, Router } from 'react-router'

ReactDOM.render(
   <Router history={browserHistory}>

      <Route path="/" component={App}>
        <Route path="/" component={LandingPage}/>
        <IndexRoute component={Home}/>
        <Route path="/movies" component={FilmWall}/>
        <Route path="/results" component={SearchResultPage} />
      </Route>
   </Router>,
  document.getElementById('root')
);
