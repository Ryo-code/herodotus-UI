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
    // const starRatingPercentage = (this.props.movieData.imdbrating / 2) / 5 * 100
    // const starRatingStyle = {
    //   background: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png") repeat-x',
    //   backgroundPosition: '0 100%',
    //   float: 'left',
    //   height: '21px',
    //   display: 'block',
    //   overflow: 'hidden',
    //   width: `${starRatingPercentage}%`
    // }
    return (
      <div className="card
        col-lg-2
        col-md-3
        col-sm-4
        col-xs-4">
        <article
          onClick={this.handleClick}
          className="film-card"
          style={style}
        >
          <div>
            {this.props.movieData.title} ({this.props.movieData.year})
          </div>
        </article>
        {
          this.props.showCard === this.state.currentMovie ?
          <DetailedCard currentMovie={this.state.currentMovie} /> : null
        }
      </div>

    );
  }
}

export default Card;
//
// const Card = (props) => {
//
//   // setting stuff up
//   const img_url = props.movieData.poster;
//   const style = {
//     backgroundImage: `url(${img_url})`
//   };
//   const handleClick = () => {
//     props.selectMovie(props.movieData);
//   };
//
//   // the output
//   return (
//     <div className="card col-md-2 col-sm-4 col-xs-6">
//       <article
//         onClick={this.handleClick}
//         className="film-card"
//         style={style}
//       >
//       </article>
//     </div>
//   )
// };
//
// export default Card;
