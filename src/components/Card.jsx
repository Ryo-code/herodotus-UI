import React, {Component} from 'react';

class Card extends Component {

  handleClick = (e) => {
    this.props.selectMovie(this.props.movieData)
  }

  render() {
    const img_url = this.props.movieData.poster;
    const style = {
      backgroundImage: 'url(' + img_url + ')'
    };
    return (
      <div className="card col-md-2 col-sm-4 col-xs-6">
        <article
          onClick={this.handleClick}
          className="film-card"
          style={style}
          // selectMovie={this.props.selectMovie}
        >

        </article>
      </div>

    );
  }
}

export default Card;
