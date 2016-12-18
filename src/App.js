import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

import './App.css';
import 'flexboxgrid';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios.get('http://0.0.0.0:3001/movies')
      .then((response) => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <MuiThemeProvider>

      <div className="App">

        <NavBar/>

        <FilmWall movies={this.state.movies} />

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
