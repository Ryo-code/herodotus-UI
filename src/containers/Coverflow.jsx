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
          displayQuantityOfSide={2}
          navigation={true}
          enableHeading={true}
          active={this.state.active}
          >

          {
            this.props.movies.map((movie, index) => {
              return (
                <img key={index} src={movie.poster} alt={movie.title} data-action={fn} />
              );
            })
          }

        </Coverflow>
        <button className='randomButton' onClick={this._handleClick.bind(this)}>Random</button>
      </div>
    );
  }
}
