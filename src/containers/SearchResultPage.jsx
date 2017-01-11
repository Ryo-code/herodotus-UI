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
      <div>
        <div className="results-text">
            <h4>Your search has yielded {this.props.searchResults.length} results. </h4>
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
