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

  selectMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  showSubmissionForm = () => {
    this.setState({showForm: true,})
  }

  handleClose = () => {
    this.setState({showForm: false,})
  }

  render() {

    let coverFlow = null;
    if(this.props.searchResults.length > 0){
      coverFlow =
      <div>
        <h1 className="timeline-title">Timeline View</h1>
        <Coverflow movies={this.props.searchResults}/>;
      </div>
    }
    else{
      coverFlow =
      <img src="http://gamingtrend.com/wp-content/screenshots/game-of-thrones-ascent/GOTA_Epic-Battle-Baratheon.jpg" alt="Smiley face"
      width="100%"/>
    }

    return (
      <div className="container">
        <NavBar
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}
        />

        <h3>Your search has yielded {this.props.searchResults.length} results! </h3>
        <p>Didn't find what you wanted? Add to the community! <button onClick={this.showSubmissionForm}>Submit a new movie</button>
          {this.state.showForm ? <MovieSubmission showForm={this.state.showForm} handleClose={this.handleClose}/> : null}
        </p>

        {coverFlow}

          <div className="search-film-row col-md-12 col-sm-12 col-xs-12">

          </div>
          <br/>
          <br/>
      </div>
    );
  }
}
