import React, { Component } from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';

import logo from './logo.svg';
import './App.css';
import 'flexboxgrid';
// import axios from 'axios'; /*or just 「import 'axios'」...?*/
//axios info: http://codeheaven.io/how-to-use-axios-as-your-http-client/

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <FilmWall />
      </div>
    );
  }
}

export default App;
