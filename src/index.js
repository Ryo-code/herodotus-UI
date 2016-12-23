import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import SearchResultPage from './containers/SearchResultPage.jsx'
import Home from './components/Home.js'
import LandingPage from './components/LandingPage.jsx'
import RegistrationPage from './containers/RegistrationPage.jsx'
import { browserHistory, Route, IndexRoute, Router } from 'react-router'
// import { browserHistory, Link, Route, IndexRoute, Router } from 'react-router'

ReactDOM.render(
   <Router history={browserHistory}>

      <Route path="/landing" component={LandingPage}/>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/results" component={SearchResultPage} />
        <Route path="/register" component={RegistrationPage} />
      </Route>
   </Router>,
  document.getElementById('root')
);
