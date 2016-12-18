import React, {Component} from 'react';

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentMovie: {}
    }
  }

  handleClick = (e) => {
    this.props.selectMovie(this.props.movieData)
  }

  render() {


    const img_url = this.props.movieData.poster; // the P for poster will be changed to lower-cased p later.
    // console.log(img_url)

    const style = {
      backgroundImage: 'url(' + img_url + ')'
    };
    return (
      <div className="card col-md-2 col-sm-4 col-xs-6">
        <article
          onClick={this.handleClick}
          className="film-card"
          style={style}
        >
        </article>
      </div>
    );
  }
}

export default Card;
