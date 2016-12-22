import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import axios from 'axios';
import LandingPage from './containers/LandingPage.jsx'

import './App.css';
import 'flexboxgrid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  state = {
    movies: [],
    loggedIn: false
  }

  updateMoviesFromSearchResult = (resultingArray) => {
    // console.log(resultingArray)
    this.setState({movies: resultingArray})
  }

  setLoggedInTrue = () => {
    this.setState({loggedIn: true})
  }

  render() {
    // if (!this.state.loggedIn)
    //   return (
    //     <div>
    //
    //       <LandingPage setLoggedInTrue={this.setLoggedInTrue}/>
    //     </div>
    //   )

    return (
      <MuiThemeProvider>

        <div>
          <NavBar updateMoviesFromSearchResult={this.updateMoviesFromSearchResult}/>

          <FilmWall movies={this.state.movies}/>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
