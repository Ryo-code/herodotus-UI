import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { browserHistory, Link, Route, Router } from 'react-router'

let Page1 = () =>
  <div>
    Page 1!!!

    <Link to="/page2">go to Page 2</Link>
  </div>

let Page2 = () =>
  <div>
    Page 2!!!

    <Link to="/page1">go to Page 1</Link>
  </div>

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2/" component={Page2} />
   </Router>,
  document.getElementById('root')
);
