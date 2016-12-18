import React, {Component} from 'react';

class DetailedCard extends Component {

  constructor() {
      super();
      this.state = {
        movie: {},
      };
    }




  render() {
    return (
      <div className="detailed-card">
        <img className="big-movie-poster" src="http://www.stunningmesh.com/wp-content/uploads/2011/08/stunningmesh-war-battlefield-movie-poster%20(3).jpg"/>
        <div className="stuff-next-to-poster">
          <h3> Title: {this.props.onClick}</h3>

          <p>some info</p>
          <p>some more info</p>
          <p>boring info</p>
          <p>cool info!</p>
          <p>some info that's really long and takes up a lot of space and such so that there's stuff to see and whatever blah blah blah</p>
        </div>
      </div>

    );
  }
}

export default DetailedCard;
