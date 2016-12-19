import React, {Component} from 'react';
import FilmWall from './containers/FilmWall.jsx';
import NavBar from './containers/NavBar.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
// const data = require('./media.json');

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


  // componentWillMount() {
  //  axios.get('http://0.0.0.0:3001/movies')
  //    .then((response) => {
  //      this.setState({ movies: [...this.state.movies, response.data] })
  //    })
  //    .catch((error) => {
  //      console.log(error)
  //    });
  // }
  // render() {


  componentDidMount() {
    axios.get('http://0.0.0.0:3000/movies')
      .then((response) => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  updateMoviesFromSearchResult = (resultingArray) => {
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
