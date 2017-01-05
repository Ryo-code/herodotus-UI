import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import DetailedCard from './DetailedCard.jsx'

export default class CoverFlow extends Component {

  // constructor(props) {
  //   super(props);

    state = {
      currentMovie: '',
      active: 2,
    };
  // }

  // _handleClick() {
  //   var num = Math.floor((Math.random() * this.props.movies.length) + 1);
  //   this.setState({
  //     active: num
  //   });
  // }

  movieData(movie, index) {
    this.setState({currentMovie: movie})
  }

  hideCard = () => {
    this.setState({currentMovie: null})
  }

  movieTest(movie) {
    console.log(movie)
  }

  render () {

    //TODO:put a function or variable here which will render the title and the years of the movies
    // const carouselText = `{this.props.movie.title}, set in {this.props.movie.set_start_year}`

    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={true}
          active={this.state.active}
        >

          {
            this.props.movies.map((movie, index) => {
              return (
                <img
                  key={index}
                  src={movie.poster}
                  alt={[movie.title, ' (', movie.set_start_year,'~', movie.set_end_year, ')']}
                  onClick={this.movieData.bind(this, movie, index)}
                />
              );
            })
          }

        </Coverflow>
        {this.state.currentMovie ? <DetailedCard currentMovie={this.state.currentMovie} hideCard={this.hideCard} /> : null}
        {/*<button className='randomButton' onClick={this._handleClick.bind(this)}>Random</button>*/}
      </div>
    );
  }
}
