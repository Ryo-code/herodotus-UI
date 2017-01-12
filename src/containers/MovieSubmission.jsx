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
    IMDBpage: '',
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value,})
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
      IMDBpage: this.state.IMDBpage
    })
    this.props.handleClose()
  }

  render () {
    return (
        <Dialog
          title="Enter the film info and submit below!"
          modal={false}
          open={this.props.showForm}
          onRequestClose={this.props.handleClose}
          autoScrollBodyContent={true}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField hintText="Pearl Harbor" floatingLabelText="Title"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="title" value={this.state.title} />
            </TextField>
            <br/>

            {/* <TextField hintText="2001" floatingLabelText="Release Year">
                <input onChange={this.handleChange} type="text" name="releaseYear" value={this.state.releaseYear} />
            </TextField> */}

            {/* <TextField hintText="Rating" floatingLabelText="Rating">
              <input onChange={this.handleChange} type="text" name="rating" value={this.state.rating} />
            </TextField> */}

            <TextField hintText="http://www.imdb.com/title/..." floatingLabelText="Corresponding IMDB Page"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}
            fullWidth={false}
            >
              <input onChange={this.handleChange} type="text" name="IMDBpage" value={this.state.IMDBpage} />
            </TextField>

            {/* <TextField hintText="183 Minutes" floatingLabelText="Runtime in minutes">
              <input onChange={this.handleChange} type="text" name="runtime" value={this.state.runtime} />
            </TextField> */}

            {/* <TextField hintText="Action" floatingLabelText="Genre">
              <input onChange={this.handleChange} type="text" name="genre" value={this.state.genre} />
            </TextField> */}

            {/* <TextField hintText="Michael Bay" floatingLabelText="Director">
              <input onChange={this.handleChange} type="text" name="director" value={this.state.director} />
            </TextField> */}

            {/* <TextField hintText="Randall Wallace" floatingLabelText="Writer">
              <input onChange={this.handleChange} type="text" name="writer" value={this.state.writer} />
            </TextField> */}

            {/* <TextField hintText="Ben Affleck, Josh Hartnett, Kate Beckinsale, William Lee Scott" floatingLabelText="Main Actor(s)">
              <input onChange={this.handleChange} type="text" name="actors" value={this.state.actors} />
            </TextField> */}

            <TextField hintText="Poster link here" floatingLabelText="Poster URL"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="poster" value={this.state.poster} />
            </TextField>

            <TextField hintText="This movie follows the story of..." floatingLabelText="Plot"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="plot" value={this.state.plot} />
            </TextField>

            <TextField hintText="eg. USA, Japan" floatingLabelText="Where is the story set?"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="setting" value={this.state.setting} />
            </TextField>

            <TextField hintText="eg. 1941" floatingLabelText="The film's story begins in year..."
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="startYear" value={this.state.startYear} />
            </TextField>

            <TextField hintText="eg. CE" floatingLabelText="Is this BCE or CE?"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="startADBC" value={this.state.startADBC} />
            </TextField>




            <TextField hintText="eg. 1945" floatingLabelText="The film's story ends in year..."
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="endYear" value={this.state.endYear} />
            </TextField>

            <TextField hintText="eg. CE" floatingLabelText="Is this BCE or CE?"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="endADBC" value={this.state.endADBC} />
            </TextField>

            <TextField hintText="yes/no" floatingLabelText="Is the beginning year is accurate?"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="startAccurate" value={this.state.startAccurate} />
            </TextField>

            <TextField hintText="yes/no" floatingLabelText="Is the end year is accurate?"
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleChange} type="text" name="endAccurate" value={this.state.endAccurate} />
            </TextField>
            <br/>
            <br/>
            <RaisedButton label="Let there be a movie!" backgroundColor="black" labelColor="white" type="submit"/>
          </form>
        </Dialog>
    )
  }
}
