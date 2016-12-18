import React, {Component} from 'react';
import DetailedCard from '../containers/DetailedCard.jsx'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentMovie: {}
    }
  }

  handleClick = (e) => {
    this.props.selectMovie(this.props.movieData)

    this.setState({currentMovie: this.props.stuff})

    // console.log(e)
    console.log("inside card.jsx: ", this.props.stuff)
    console.log("this.state.currentMovie: ", this.state.currentMovie)

    return (
      <DetailedCard />
    )
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
        >

        </article>

      </div>

    );
  }
}

export default Card;
