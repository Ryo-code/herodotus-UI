import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FilmWall from './containers/FilmWall.jsx';
import SearchResultPage from './containers/SearchResultPage.jsx'

import { browserHistory, Link, Route, Router } from 'react-router'



ReactDOM.render(
   <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/results" component={SearchResultPage} />
   </Router>,
  document.getElementById('root')
);
