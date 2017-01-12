import React, {Component} from 'react';
import Coverflow from 'react-coverflow';
import DetailedCard from './DetailedCard.jsx'

export default class CoverFlow extends Component {

    state = {
      currentMovie: '',
      active: Math.floor(Math.random() * this.props.movies.length)
    }

  movieData(movie) {
    this.setState({currentMovie: movie})
  }

  hideCard = () => {
    this.setState({currentMovie: null})
  }

  handleClick = (event) => {
    let num;
    if (event.target.name === 'first') {
      num = 1
    } else if (event.target.name === 'last') {
      num = this.props.movies.length - 1
    } else if (event.target.name === 'random') {
      num = Math.floor((Math.random() * this.props.movies.length))
    }

    this.setState({active: num})
  }

  render() {
    //TODO:put a function or variable here which will render the title and the years of the movies
    // const carouselText = `{this.props.movie.title}, set in {this.props.movie.set_start_year}`

    return (
      <div>
        <div>
          <Coverflow
            width={960}
            height={480}
            displayQuantityOfSide={2}
            navigation={true}
            enableHeading={true}
            active={this.state.active}
          >

            {this.props.movies.map((movie, index) => {
              return (
                <img
                  key={index}
                  src={movie.poster}
                  alt={[movie.title, ' (', movie.set_start_year, movie.start_ad_bc === 'BCE' ? movie.start_ad_bc  : '', '~', movie.set_end_year, movie.end_ad_bc === 'BCE' ? movie.end_ad_bc : '', ')']}
                  onClick={this.movieData.bind(this, movie)}/
                >
              );
            })
          }

        </Coverflow>
        <div className="carousel-custom-buttons">
            <button className='cover-flow-button left' name="first" onClick={this.handleClick}>Beginning</button>
            {/* <button className='cover-flow-button middle' name="random" onClick={this.handleClick}>Random</button> */}
            <button className='cover-flow-button right' name="last" onClick={this.handleClick}>End</button>
          </div>
        </div>
        <br/>
        {
          this.state.currentMovie ?
          <DetailedCard currentMovie={this.state.currentMovie} hideCard={this.hideCard}/>
          : null
        }
      </div>
    );
  }
}
