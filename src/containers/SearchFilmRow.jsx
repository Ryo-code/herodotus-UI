import React, {Component} from 'react';
import Card from '../components/Card.jsx';
// import DetailedCard from './DetailedCard';
// import axios from 'axios';

class SearchFilmRow extends Component {

  state = {
    movies: [],
    currentMovie: null,
  }

  componentDidMount() {
    this.setState({movies: this.props.currentMovies})
  }

  selectMovie = (movie) => {
    console.log('clicked selectmovie in searchfilmrow')
    this.setState({ currentMovie: movie })
  }

  hideDetails = () => {
    console.log('clicked hidedetails in searchfilmrow')
    this.setState({ currentMovie: null });
  }

  render() {
    return (
      <div>
        <div className="row">

          <div className="search-film-row col-md-12 col-sm-12 col-xs-12">
            {
              this.props.currentMovies.map((movie, index) => {
                return (
                  <Card
                    key={index}
                    movieData={movie}
                    selectMovie={this.selectMovie}
                    showCard={this.state.currentMovie}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchFilmRow;
