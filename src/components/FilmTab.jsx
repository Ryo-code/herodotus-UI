import React, {Component} from 'react'

export default class DetailTab extends Component {
  render() {
    const currentMovie = this.props.currentMovie
    return (
      <div>
        <p><span>IMDB Rating:</span> {currentMovie.imdbrating}</p>
         {currentMovie.metascore ? <p><span> Metascore: </span> {currentMovie.metascore}</p> : ""}
        <p><span>Runtime:</span> {currentMovie.runtime}</p>
        <p><span>Country(ies):</span> {currentMovie.country}</p>
        <p><span>Awards:</span> {currentMovie.awards ? currentMovie.awards : ""}</p>
        <p><span>Director:</span> {currentMovie.director}</p>
        <p><span>Main actor(s):</span> {currentMovie.actors}</p>
        <p><span>Rated:</span> {currentMovie.rated}</p>
        <p></p>
        <p></p>
      </div>
    )
  }
}