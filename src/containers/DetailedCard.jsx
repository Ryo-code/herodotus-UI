import React, {Component} from 'react';
import DetailedTabs from '../components/DetailedTabs.jsx'

class DetailedCard extends Component {

  render() {
    return (
      <div onClick={this.props.hideDetails}>
        <div className="detailed-card">

          <img role="presentation" className="big-movie-poster" src={this.props.currentMovie.poster} />
          <div className="stuff-next-to-poster">
            <DetailedTabs
              currentMovie={this.props.currentMovie}
              hideCard={this.props.hideCard}
              currentMovieComments={this.props.currentMovieComments}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default DetailedCard;
