import React, {Component} from 'react';
import Coverflow from 'react-coverflow';

var fn = function () {
  /* do you want */
}

export default class CoverFlow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  _handleClick() {
    var num = Math.floor((Math.random() * this.props.movies.length) + 1);
    this.setState({
      active: num
    });
  }

  render () {
    return (
      <div>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={3}
          navigation={true}
          enableHeading={true}
          active={0}
          >

          {
            this.props.movies.map((movie, index) => {
              const movieText = `${movie.title} (${movie.set_start_year} - ${movie.set_end_year})`
              return (
                <img key={index} src={movie.poster} alt={movieText} data-action={fn} />
              );
            })
          }

        </Coverflow>
        <button className='randomButton' onClick={this._handleClick.bind(this)}>Random</button>
      </div>
    );
  }
}
