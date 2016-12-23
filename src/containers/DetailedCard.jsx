import React, {Component} from 'react';
import DetailedTabs from '../components/DetailedTabs.jsx'

class DetailedCard extends Component {
  render() {
    const currentMovie = this.props.currentMovie
    return (
      <div onClick={this.props.hideDetails}>
        <div className="detailed-card">
          <img role="presentation" className="big-movie-poster" src={currentMovie.poster} />
          <div className="stuff-next-to-poster">
            <DetailedTabs currentMovie={this.props.currentMovie} hideCard={this.props.hideCard}/>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailedCard;
