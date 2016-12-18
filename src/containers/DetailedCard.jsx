import React, {Component} from 'react';

class DetailedCard extends Component {

  render() {
    return (
      <div className="detailed-card">
        <img role="presentation" className="big-movie-poster" src={this.props.stuff.poster}/>
        <div className="stuff-next-to-poster">
          <h3> Title: {this.props.stuff.title}</h3>
          <p>Year Released: {this.props.stuff.year}</p>
          <p>Runtime: {this.props.stuff.runtime}</p>
          <p>Genre(s): {this.props.stuff.genre}</p>
          <p>Plot: {this.props.stuff.plot}</p>
          <p>IMDB Rating: {this.props.stuff.imdbrating}</p>
          <p>Country(ies): {this.props.stuff.country}</p>
        </div>
      </div>

    );
  }
}

export default DetailedCard;

// t.string :title
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