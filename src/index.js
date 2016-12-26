import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SearchResultPage from './containers/SearchResultPage.jsx'
import Home from './components/Home.js'
import LandingPage from './containers/LandingPage.jsx'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
// import { browserHistory, Link, Route, IndexRoute, Router } from 'react-router'

ReactDOM.render(
   <Router history={browserHistory}>

      <Route path="/" component={LandingPage}/>
        <Route path="/movies" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/results" component={SearchResultPage} />
      </Route>
   </Router>,
  document.getElementById('root')
);
