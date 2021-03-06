import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import Coverflow from './Coverflow.jsx';
import MovieSubmission from './MovieSubmission.jsx'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  display: "flex",
  marginRight: "auto",
  marginLeft: "auto",
  maxWidth: "50%",
}

export default class SearchResultPage extends Component {

  state = {
    movies: [],
    currentMovie: null,
    showForm: false,
  }

  componentDidMount() {
    this.setState({movies: this.props.searchResults})
  }

  // Selects the current movie when clicked
  selectMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  // This will show the form when the button is clicked
  showSubmissionForm = () => {
    this.setState({showForm: true,})
  }

  // This will close the form when clicked out of it
  handleClose = () => {
    this.setState({showForm: false,})
  }

  render() {

    let coverFlow = null;
    if(this.props.searchResults.length > 0){
      coverFlow =
      <div>
        <div className="results-text">
          <h4>Your search has yielded {this.props.searchResults.length} results! Click or scroll through. </h4>
        </div>
        <h1 className="timeline-title">Timeline</h1>
        <Coverflow movies={this.props.searchResults}/>
      </div>
    }
    else{
      coverFlow =
      <div className="results">
        <div className="results-text">
          <h4>Your search has yielded no results. </h4>
          <p>Didn't find what you wanted? Add to the community! </p>
          <RaisedButton label="Submit a New Movie" style={style} onClick={this.showSubmissionForm} />
          {this.state.showForm ? <MovieSubmission showForm={this.state.showForm} handleClose={this.handleClose}/> : null}
        </div>
        <img src="http://gamingtrend.com/wp-content/screenshots/game-of-thrones-ascent/GOTA_Epic-Battle-Baratheon.jpg" alt="Smiley face"
         width="100%"/>
      </div>
    }

    return (
      <div className="container">
        <NavBar
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}/>

        {coverFlow}

          <br/>
          <br/>
      </div>
    );
  }
}
