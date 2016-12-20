import React, {Component} from 'react';
import DetailedTabs from '../components/DetailedTabs.jsx'

class DetailedCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showDetailedCard: false
    }
  }

  handleClick = (e) => {
    this.props.hideDetails
  }

  render() {

    const currentMovie = this.props.currentMovie
    console.log("detailed card", this.props)
    return (
        <div className="detailed-card">
          <img role="presentation" className="big-movie-poster" src={currentMovie.poster}/>
          <div className="stuff-next-to-poster">
            <DetailedTabs currentMovie={this.props.currentMovie} />
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