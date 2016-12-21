import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
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

  componentDidMount() {
    axios.get('http://0.0.0.0:3000/movies').then((response) => {
      this.setState({movies: response.data})
    }).catch((error) => {
      console.log(error)
    })
  }

  updateMoviesFromSearchResult = (resultingArray) => {
    this.setState({movies: resultingArray})
  }

  setLoggedInTrue = () => {
    this.setState({loggedIn: true})
  }

  render() {
    if (!this.state.loggedIn)
      return (
        <div>

          {/* not logged in...
          <button onClick={() => this.setState({loggedIn: true})}>
            Please login!
          </button> */}

          <LandingPage setLoggedInTrue={this.setLoggedInTrue}/>
        </div>
      )

    return (
      <MuiThemeProvider>

        <div className="App">

          <NavBar updateMoviesFromSearchResult={this.updateMoviesFromSearchResult}/>

          <FilmWall movies={this.state.movies}/>

        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
