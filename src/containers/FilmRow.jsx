import React, {Component} from 'react';
import Card from '../components/Card.jsx';
import DetailedCard from './DetailedCard';

class FilmRow extends Component {

  constructor(props) {
    super(props)
      this.state = {
        movies: this.props.movies,
        currentMovie: null,
      }
  }


componentdidmount

  selectMovie = (movie) => {
    this.setState({currentMovie: movie})
  }

  hideDetails = () => {
    this.setState({ currentMovie: null });
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="film-row-title">
            Row Title
          </h2>

          <div className="film-row col-md-12 col-sm-12 col-xs-12">
            {
              this.props.movies.map((movie, index) => {
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
        { this.state.currentMovie ? <DetailedCard currentMovie={this.state.currentMovie} hideDetails={this.hideDetails} /> : '' }
      </div>
    );
  }
}

export default FilmRow;
