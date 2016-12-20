import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';

class FilmWall extends Component {
  constructor(props) {
    super(props)
    this.state = {currentMovie: ''}
  }

  render() {
    return (
      <div className="container">

        <h1>Displaying {this.props.movies.length} movies</h1>
        <FilmRow movies={this.props.movies} genre="action" />
        <FilmRow movies={this.props.movies} genre="drama" />

      </div>
    );
  }
}
// <DetailedCard/>
export default FilmWall;
