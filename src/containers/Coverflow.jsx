import React, {Component} from 'react';
import Coverflow from 'react-coverflow';

var fn = function () {
  /* do you want */
}

export default class CoverFlow extends Component {

  render () {

    //TODO:put a function or variable here which will render the title and the years of the movies
    // const carouselText = `{this.props.movie.title}, set in {this.props.movie.set_start_year}`

      console.log(this.props.movies)
    return (
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={true}
          >

          {
            this.props.movies.map((movie, index) => {
              console.log(movie)
              return (
                <img key={index} src={movie.poster} alt={[movie.title, ' (', movie.set_start_year,'~', movie.set_end_year, ')']} data-action={fn} />
              );
            })
          }

        </Coverflow>
    );
  }
}