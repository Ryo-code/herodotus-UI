import React, {Component} from 'react';
import Card from '../components/Card.jsx';
import DetailedCard from './DetailedCard';
import axios from 'axios';

class FilmRow extends Component {

  state = {
    movies: [],
    currentMovie: null,
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:3000/movies?genre=${this.props.rowGenre}`)
      .then((response) => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }


  selectMovie = (movie) => {
    this.props.setMovie(movie, this.props.rowGenre)
  }

  hideDetails = () => {
    this.setState({ currentMovie: null });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h2 className="film-row-title">
            {this.props.rowGenre}
          </h2>

          <div className="film-row col-md-12 col-sm-12 col-xs-12">
            {
              this.state.movies.map((movie, index) => {
                return (
                  <Card
                    key={index}
                    movieData={movie}
                    selectMovie={this.selectMovie}
                  />
                );
              })
            }
          </div>
        </div>
        {
          this.props.card === this.props.rowGenre ?
            <DetailedCard currentMovie={this.props.currentMovie} hideDetails={this.hideDetails} /> : null
        }
      </div>
    );
  }
}

export default FilmRow;
