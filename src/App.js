
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
      movies: [],
      searchResults: [],
    }
  }

  updateMoviesFromSearchResult = (resultingArray) => {
    this.setState({movies: resultingArray})
  }

  updateToSearchResults = (results) => {
    console.log("called")
    this.setState({searchResults: results})
  }

  render() {
    return (
      <MuiThemeProvider>
        {React.cloneElement(this.props.children, {
          ...this.state,
          updateToSearchResults: this.updateToSearchResults,
          updateMoviesFromSearchResult: this.updateMoviesFromSearchResult,
        })}
      </MuiThemeProvider>

    );
  }
}

export default App;
