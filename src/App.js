
import React, {Component} from 'react';
// import FilmWall from './containers/FilmWall.jsx';
// import NavBar from './containers/NavBar.jsx';
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

  componentWillReceiveProps(nextProp) {
    // console.log("inside app.js nextProp: ", nextProp)
    // console.log("inside app.js this.state.searchResults: ", this.state.searchResults)
    // if (this.state.searchResults !== nextProp){
      // this.setState({searchResults: nextProp})
      console.log(nextProp)
      // console.log(this.state.)
    // } else {
    //   this.setState()
    // console.log("componentDidMount")
    // }
  }

  updateMoviesFromSearchResult = (resultingArray) => {
    this.setState({movies: resultingArray})
  }

  updateToSearchResults = (results) => {
    // console.log(this.state.searchResults)
    this.setState({searchResults: results})
  }

  clearSearchResults = () => {
    this.setState({searchResults: [] })
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
