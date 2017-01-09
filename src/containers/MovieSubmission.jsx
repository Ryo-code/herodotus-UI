import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'


export default class MovieSubmission extends Component {

    state = {
      title: '',
      releaseYear: '',
      rating: '',
      releaseDate: '',
      runtime: '',
      genre: '',
      director: '',
      writer: '',
      actors: '',
      plot: '',
      language: '',
      country: '',
      awards: '',
      poster: '',
      metascore: '',
      imdbrating: '',
      keywords: '',
      startYear: '',
      startADBC: '',
      startAccurate: '',
      endYear: '',
      endADBC: '',
      endAccurate: '',
      setting: '',
    }

    handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value,
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()

      axios.post(`http://0.0.0.0:3000/movies`, {
        title: this.state.title,
        releaseYear: this.state.releaseYear,
        rating: this.state.rating,
        releaseDate: this.state.releaseDate,
        runtime: this.state.runtime,
        genre: this.state.genre,
        director: this.state.director,
        writer: this.state.writer,
        actors: this.state.actors,
        plot: this.state.plot,
        language: this.state.language,
        country: this.state.country,
        awards: this.state.awards,
        poster: this.state.poster,
        metascore: this.state.metascore,
        imdbrating: this.state.imdbrating,
        keywords: this.state.keywords,
        startYear: this.state.startYear,
        startADBC: this.state.startADBC,
        startAccurate: this.state.startAccurate,
        endYear: this.state.endYear,
        endADBC: this.state.endADBC,
        endAccurate: this.state.endAccurate,
        setting: this.state.setting,
      })
    }


  render () {
    return (
      <div>

        <Dialog
          title="Enter the new movie information here!"
          modal={false}
          open={this.props.showForm}
          onRequestClose={this.props.handleClose}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField hintText="Pearl Harbor" floatingLabelText="Title">
              <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
            </TextField>

            <TextField hintText="2001" floatingLabelText="Release Year">
                <input onChange={this.handleChange} type="text" name="releaseYear" value={this.state.releaseYear} />
            </TextField>

            <TextField hintText="Rating" floatingLabelText="Rating">
              <input onChange={this.handleChange} type="text" name="rating" value={this.state.rating} />
            </TextField>

            <TextField hintText="May 25, 2001" floatingLabelText="Exact release date">
              <input onChange={this.handleChange} type="text" name="releaseDate" value={this.state.releaseDate} />
            </TextField>

            <TextField hintText="183 Minutes" floatingLabelText="Runtime in minutes">
              <input onChange={this.handleChange} type="text" name="runtime" value={this.state.runtime} />
            </TextField>

            <TextField hintText="Action" floatingLabelText="Genre">
              <input onChange={this.handleChange} type="text" name="genre" value={this.state.genre} />
            </TextField>

            <TextField hintText="Michael Bay" floatingLabelText="Director">
              <input onChange={this.handleChange} type="text" name="director" value={this.state.director} />
            </TextField>

            <TextField hintText="Randall Wallace" floatingLabelText="Writer">
              <input onChange={this.handleChange} type="text" name="writer" value={this.state.writer} />
            </TextField>

            <TextField hintText="Ben Affleck, Josh Hartnett, Kate Beckinsale, William Lee Scott" floatingLabelText="Main Actor(s)">
              <input onChange={this.handleChange} type="text" name="actors" value={this.state.actors} />
            </TextField>

            <TextField hintText="Pearl Harbor follows the story of two best friends, Rafe and Danny, and their love lives as they go off to join the war." floatingLabelText="Plot">
              <input onChange={this.handleChange} type="text" name="plot" value={this.state.plot} />
            </TextField>

            <TextField hintText="English, Japanese" floatingLabelText="Language">
              <input onChange={this.handleChange} type="text" name="language" value={this.state.language} />
            </TextField>

            <TextField hintText="USA" floatingLabelText="Country that released the movie">
              <input onChange={this.handleChange} type="text" name="country" value={this.state.country} />
            </TextField>

            <TextField hintText="Won 1 Oscar. Another 11 wins & 50 nominations." floatingLabelText="Awards">
              <input onChange={this.handleChange} type="text" name="awards" value={this.state.awards} />
            </TextField>

            <TextField hintText="Poster link here" floatingLabelText="Poster">
              <input onChange={this.handleChange} type="text" name="poster" value={this.state.poster} />
            </TextField>

            <TextField hintText="44" floatingLabelText="Metacritic score">
              <input onChange={this.handleChange} type="text" name="metascore" value={this.state.metascore} />
            </TextField>

            <TextField hintText="6" floatingLabelText="IMDB Rating">
              <input onChange={this.handleChange} type="text" name="imdbrating" value={this.state.imdbrating} />
            </TextField>

            <TextField hintText="Japanese, Bombing, America, Boom, Splat, Pop" floatingLabelText="Keywords">
              <input onChange={this.handleChange} type="text" name="keywords" value={this.state.keywords} />
            </TextField>

            <TextField hintText="1941" floatingLabelText="Set start year of actual story">
              <input onChange={this.handleChange} type="text" name="startYear" value={this.state.startYear} />
            </TextField>

            <TextField hintText="AD" floatingLabelText="Set start year in AD or BC">
              <input onChange={this.handleChange} type="text" name="startADBC" value={this.state.startADBC} />
            </TextField>

            <TextField hintText="yes" floatingLabelText="Is set start year accurate? Yes or no">
              <input onChange={this.handleChange} type="text" name="startAccurate" value={this.state.startAccurate} />
            </TextField>

            <TextField hintText="1941" floatingLabelText="Set end year of actual story">
              <input onChange={this.handleChange} type="text" name="endYear" value={this.state.endYear} />
            </TextField>

            <TextField hintText="AD" floatingLabelText="Set end year in AD or BC">
              <input onChange={this.handleChange} type="text" name="endADBC" value={this.state.endADBC} />
            </TextField>

            <TextField hintText="yes" floatingLabelText="Is set end year accurate? Yes or no">
              <input onChange={this.handleChange} type="text" name="endAccurate" value={this.state.endAccurate} />
            </TextField>

            <TextField hintText="Japan, USA" floatingLabelText="Setting location of actual story">
              <input onChange={this.handleChange} type="text" name="setting" value={this.state.setting} />
            </TextField>

            <RaisedButton label="Let there be a movie!" primary={true} type="submit" />
          </form>
        </Dialog>

      </div>
    )
  }
}