import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import 'flexboxgrid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  updateMoviesFromSearchResult = (resultingArray) => {
    // console.log(resultingArray)
    this.setState({movies: resultingArray})
  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="App">
          <NavBar updateMoviesFromSearchResult={this.updateMoviesFromSearchResult}/>

        <FilmWall movies={this.state.movies} />

          <div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            - - - -
          </div>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
