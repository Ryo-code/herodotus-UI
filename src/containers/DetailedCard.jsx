import React, {Component} from 'react';
import DetailedTabs from '../components/DetailedTabs.jsx'

class DetailedCard extends Component {

  handleClick = () => {
    this.props.hideDetails()
  }

  render() {
    const currentMovie = this.props.currentMovie
    return (
        <div className="detailed-card">
          <img role="presentation" className="big-movie-poster" src={currentMovie.poster} />
          <div className="stuff-next-to-poster">
            <DetailedTabs currentMovie={this.props.currentMovie} />
          </div>
        </div>
    );
  }
}

export default DetailedCard;
