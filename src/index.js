import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FilmWall from './containers/FilmWall.jsx';
import SearchResultPage from './containers/SearchResultPage.jsx'
import Home from './components/Home.js'

import { browserHistory, Link, Route, IndexRoute, Router } from 'react-router'


let App2 = props =>
  <div>
    <h1>Hey hey</h1>

    {React.cloneElement(props.children, {
      result: 'best movie bro'
    })}
  </div>

// let Results = props =>
//   <div>
//     <h1>results Page!</h1>
//     {props.result}
//   </div>

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/results" component={SearchResultPage} />
      </Route>
   </Router>,
  document.getElementById('root')
);
      // <Route path="/results" component={SearchResultPage} />
