import React, {Component} from 'react';

class DetailedCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showDetailedCard: false
    }
  }

  handleClick = (e) => {
    // console.log(this.props.hideDetails)
    return this.props.hideDetails
  }

  render() {

    const currentMovie = this.props.currentMovie
    return (
      <div onClick={this.props.hideDetails}>
        <div className="detailed-card">
          <img role="presentation" className="big-movie-poster" src={currentMovie.poster}/>
          <div className="stuff-next-to-poster">
            <h3> Title: {currentMovie.title}</h3>
            <p>Year Released: {currentMovie.year}</p>
            <p>Runtime: {currentMovie.runtime}</p>
            <p>Genre(s): {currentMovie.genre}</p>
            <p>Plot: {currentMovie.plot}</p>
            <p>IMDB Rating: {currentMovie.imdbrating}</p>
            <p>Country(ies): {currentMovie.country}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedCard;

//       t.string :title
//       t.integer :year
//       t.string :rated
//       t.string :released
//       t.string :runtime
//       t.string :genre
//       t.string :director
//       t.string :writer
//       t.string :actors
//       t.text :plot
//       t.string :language
//       t.string :country
//       t.string :awards
//       t.string :poster
//       t.integer :metascore
//       t.integer :imdbrating
//       t.string :imdbid
//       t.text :keywords
//       t.text :summary_text