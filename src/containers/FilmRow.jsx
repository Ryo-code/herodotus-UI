import React, {Component} from 'react';
import Card from '../components/Card.jsx';

class FilmRow extends Component {

  constructor(props) {
    super(props)
      this.state = {
        movies: [],
        // clickedMovie: ""
      }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.moviesTest !== this.props.moviesTest) {
      this.setState({movies: nextProps.moviesTest})
    }
  }

  selectMovie = (movie) => {
    console.log(movie)
    // this.setState({clickedMovie: movie})
  }

  render() {
    return (
      <div className="row">
        <h2 className="film-row-title">
          Row Title
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
    );
  }
}

export default FilmRow;
