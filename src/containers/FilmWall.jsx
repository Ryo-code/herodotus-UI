import React, { Component } from 'react';
import FilmRow from './FilmRow.jsx';

class FilmWall extends Component {
  render() {
    return (
      <div className="container">

        <FilmRow/>
        <FilmRow/>
        <FilmRow/>
        <FilmRow/>


      </div>
    );
  }
}

export default FilmWall;
