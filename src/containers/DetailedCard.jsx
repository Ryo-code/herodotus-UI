import React, {Component} from 'react';
import DetailedTabs from '../components/DetailedTabs.jsx'
import Clear from 'material-ui/svg-icons/content/clear';

class DetailedCard extends Component {

  render() {
    const currentMovie = this.props.currentMovie
    return (
        <div className="detailed-card">
          <img role="presentation" className="big-movie-poster" src={currentMovie.poster} />
          <div className="stuff-next-to-poster">
            <DetailedTabs currentMovie={this.props.currentMovie} hideCard={this.props.hideCard}/>
          </div>
        </div>
    );
  }
}

export default DetailedCard;
