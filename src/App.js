import React, { Component } from 'react';
import FilmWall from './containers/FilmWall.jsx';

import logo from './logo.svg';
import './App.css';
import 'flexboxgrid';
import axios from 'axios'; /*or just 「import 'axios'」...?*/
//axios info: http://codeheaven.io/how-to-use-axios-as-your-http-client/

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>your fucking awesome app</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilmWall />
      </div>
    );
  }
}

export default App;
