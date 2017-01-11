import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'

export default class NoteTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userNotes: this.props.userNotes,
      newNote: '',
      editNote: '',
      editNoteID: '',
      formState: false,
    }
  }

  // This deletes an exisiting note (Wondering if I can put this into handleSubmission function later)
  deleteNote(noteID) {
    axios.delete(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes/${noteID}`)
    .then((response) => {
      this.setState({newNote: '',})
      this.props.newUserNote(response.data.notes, 'deletedNote')
    })
  }

  // This handles both the post of a new note or an update of an existing note
  handleSubmit = (event) => {
    event.preventDefault()
    let method = 'post'
    let url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes`
    let data = {
      username: localStorage.username,
      note: this.state.newNote,
    }

    // This changes the axios call if it is a note edit
    if (event.target.name === 'editNotes') {
      method = 'put'
      url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes/${this.state.editNoteID}`
      data = {note: this.state.editNote}
    }

    axios({
      method: method,
      url: url,
      data: data,
    })
    .then((response) => {
      if (response.data.type === 'note') {
        this.props.newUserNote(response.data.note, 'newNote')
      } else {
        this.props.newUserNote(response.data.notes, 'editedNote')
      }
      this.setState({
        formState: false,
        newNote: '',
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // This closes the form
  handleFormClose = () => {
    this.setState({formState: false,})
  }

  // This grabs the ID and current note while opening the form
  editFormShow(currentNote, noteID) {
    this.setState({
      formState: true,
      editNote: currentNote,
      editNoteID: noteID
    })
  }

  // This handles the changes of the input fields
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} name='notes'>

          <TextField hintText='Enter your note below' floatingLabelText='Enter your own note about this movie here'>
            <input onChange={this.handleChange} name='newNote' type='text' value={this.state.newNote} style={{color: "white", position: "absolute", bottom: "0"}}/>
          </TextField>

        </form>

      {this.props.userNotes.length > 0 ? this.props.userNotes.map((note, index) => {
          return (
            <div className="notes" key={note.id}>
              <p key={index}>{note.note}</p>
              <button onClick={this.deleteNote.bind(this, note.id)}>Delete</button>
              <button onClick={this.editFormShow.bind(this, note.note, note.id)}>Edit</button>

              <Dialog
                title="Edit your note"
                modal={false}
                open={this.state.formState}
                onRequestClose={this.handleFormClose}
              >
              <form onSubmit={this.handleSubmit} name="editNotes">
              <TextField floatingLabelText="Note" fullWidth={true}>
                <input onChange={this.handleChange} type="text" name="editNote" value={this.state.editNote} />
              </TextField>
              <RaisedButton label="Update!" primary={true} type="submit"/>
              </form>
              </Dialog>

            </div>
          )
        }) : 'You do not have any notes for this movie just yet.'
      }
      </div>
    )
  }
}