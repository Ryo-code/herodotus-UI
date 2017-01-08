import React, {Component} from 'react'

export default class NoteTab extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} name='notes'>

        <TextField hintText='Enter your note below' floatingLabelText='Enter your own note about this movie here' >
          <input onChange={this.handleFormChange} name='note' type='text' value={this.state.note} style={{color: "white", position: "absolute", bottom: "0"}}/>
        </TextField>

      </form>

        this.state.userNotes ? this.state.userNotes.map((note, index) => {
          return (
            <div key={note.id}>
              <p className="notes" key={index}>{note.note}</p>
              <button onClick={this.deleteNote.bind(this, note.id)}>Delete</button>
              <button onClick={this.triggerEditNoteForm.bind(this, note.note, note.id)}>Edit</button>
                 {
                    this.state.editNoteForm ?
                      <Dialog
                        title="Edit your note"
                        modal={false}
                        open={this.state.editNoteForm}
                        onRequestClose={this.handleFormClose}
                      >
                      <form onSubmit={this.handleSubmit} name="editNotes">
                      <TextField floatingLabelText="Note" fullWidth={true}>
                        <input onChange={this.handleFormChange} type="text" name="editNote" value={this.state.editNote} />
                      </TextField>
                      <RaisedButton label="Change!" primary={true} type="submit"/>
                      </form>
                      </Dialog>
                    : false
                  }
            </div>
          )
        }) : null

    )
  }
}