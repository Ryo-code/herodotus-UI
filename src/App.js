import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';

import './App.css';
import 'flexboxgrid';
import axios from 'axios';/*or just 「import 'axios'」...?*/
//axios info: http://codeheaven.io/how-to-use-axios-as-your-http-client/

class App extends Component {
  render() {

    return (
      <div className="App">

        <NavBar/>

        <FilmWall/>

        <div>
          ~ ~ ~ ~ ~ {/* For when you click on it...*/}
          <div className="temp">
            <img className="big-ass-poster" src="http://www.impawards.com/2016/posters/xmen_apocalypse_ver18_xxlg.jpg"/>
            <div className="stuff-next-to-poster">
              <h3>Movie Title</h3>

              <p>some info</p>
              <p>some more info</p>
              <p>boring info</p>
              <p>cool info!</p>
              <p>some info that's really long and takes up a lot of space and such so that there's stuff to see and whatever blah blah blah</p>
            </div>
          </div>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          - - - -
        </div>

      </div>
    );
  }
}

export default App;
