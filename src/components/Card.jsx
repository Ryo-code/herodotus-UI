import React, {Component} from 'react';

class Card extends Component {

  render() {

    const img_url = this.props.movieData.Poster; // 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3MDc0MDc1NF5BMl5BanBnXkFtZTYwODI1ODY2._V1_SX300.jpg';
    const style = {
      backgroundImage: 'url(' + img_url + ')'
    };
    return (
      <div className="card col-md-2 col-sm-4 col-xs-6">
        <article
          className="film-card"
          style={style}
        >

        </article>
      </div>

    );
  }
}

export default Card;
