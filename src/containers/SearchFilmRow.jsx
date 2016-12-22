import React, {Component} from 'react';
import Card from '../components/Card.jsx';
import DetailedCard from './DetailedCard';
import axios from 'axios';

class SearchFilmRow extends Component {

  state = {
    movies: this.props.currentMovies,
    currentMovie: null,
  }

  // componentDidMount() {
  //   axios.get(`${this.props.query}`)
  //     .then((response) => {
  //       this.setState({ movies: response.data })
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }


  selectMovie = (movie) => {
    this.setState({currentMovie: true})
  }

  hideDetails = () => {
    this.setState({ currentMovie: null });
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="film-row-title">
            {this.state.query}
          </h2>

          <div className="search-film-row col-md-12 col-sm-12 col-xs-12">
            {
              this.props.currentMovies.map((movie, index) => {
                return (
                  <Card
                    key={index}
                    movieData={movie}
                    selectMovie={this.selectMovie}
                    showCard={this.state.currentMovies}
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
