import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import 'flexboxgrid';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
  render() {

    return (
      <MuiThemeProvider>

      <div className="App">

        <NavBar/>

        <FilmWall/>

        <div>
          ~ ~ ~ ~ ~ {/* For when you click on it...*/}

          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          - - - -
        </div>

      </div>
    </MuiThemeProvider>

    );
  }
}

export default App;
