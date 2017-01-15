import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import './src/index.css';
import SearchResultPage from './src/containers/SearchResultPage.jsx'
import Home from './src/components/Home.js'
import LandingPage from './src/containers/LandingPage.jsx'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
import FilmWall from './src/containers/FilmWall.jsx'
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
