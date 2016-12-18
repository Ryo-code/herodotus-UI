import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'

import './App.css';
import 'flexboxgrid';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    axios.get('http://0.0.0.0:3000/movies').then((response) => {
      this.setState({
        movies: [
          ...this.state.movies, {
            movies: response.data
          }
        ]
      })
    }).catch((error) => {
      console.log(error)
    });
  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="App">

          <NavBar/>

          <FilmWall/>

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
