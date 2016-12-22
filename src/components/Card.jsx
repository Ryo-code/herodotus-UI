import React, {Component} from 'react';
import DetailedCard from '../containers/DetailedCard.jsx';


class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentMovie: this.props.movieData,
    }
  }

  handleClick = (e) => {
    this.props.selectMovie(this.props.movieData)
  }

  render() {
    const img_url = this.props.movieData.poster;
    const style = {
      backgroundImage: `url(${img_url})`
    };
    return (
      <div className="card col-md-2 col-sm-4 col-xs-6">
        <article
          onClick={this.handleClick}
          className="film-card"
          style={style}
        >
        </article>
        {this.props.showCard === this.state.currentMovie ? <DetailedCard currentMovie={this.state.currentMovie} /> : null}
      </div>

    );
  }
}

export default Card;