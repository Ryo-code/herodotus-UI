import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import DetailTab from './DetailTab'
import FilmTab from './FilmTab'
// import NoteTab from './NoteTab'
// import CommentTab from './CommentTab'

// import FontIcon from 'material-ui/FontIcon';
import Create from 'material-ui/svg-icons/content/create';
import Face from 'material-ui/svg-icons/action/face';
import Forum from 'material-ui/svg-icons/communication/forum';
import Videocam from 'material-ui/svg-icons/av/videocam';
import Clear from 'material-ui/svg-icons/content/clear';

const scrollStyles = {
  headline: {
    fontSize: 40,
    // paddingTop: 16,
    marginTop: 0,
    marginBottom: 12,
    // paddingTop: 16,
  },
  slide: {
    padding: 50,
    overflowY: "scroll"
  },
};

class DetailedTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      comment: '',
      note: '',
      editComment: '',
      editNote: '',
      currentMovieComments: [],
      userNotes: [],
      editForm: false,
      editNoteForm: false,
    };
  }

  //As soon as the component mounts, it will grab the user notes and all the comments for the clicked movie
  componentDidMount() {
    // This grabs the specific user notes of the specific movie
    if (localStorage.userID) {
      axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes`)
        .then((response) => {
          this.setState({
            userNotes: response.data.notes,
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }

    // This grabs all the comments of the specific movie
      axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}`)
        .then((response) => {
          this.setState({
            currentMovieComments: response.data.comments,
          })
        })
        .catch((error) => {
          console.log(error)
        })
  }

  //Will grab the user notes and all comments for the next movie the user clicks
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentMovie !== this.props.currentMovie) {
      // This grabs the specific user notes of the specific movie
      if (localStorage.userID) {
        axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes`)
          .then((response) => {
            this.setState({
              userNotes: response.data.notes,
            })
          })
          .catch((error) => {
            console.log(error)
          })
      }

      // This grabs all the comments
      axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}`)
        .then((response) => {
          this.setState({
            currentMovieComments: response.data.comments,
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  //Changes the slide tab
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  }

  //Closes the card when the X is clicked
  handleCloseClick = () => {
    this.props.hideCard()
  }


  //Will update the value of the field being currently entered
  handleFormChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  deleteComment(commentID) {
    axios.delete(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments/${commentID}`)
    .then((response) => {
      this.setState({
        currentMovieComments: response.data.comments,
      })
    })
  }

  deleteNote(noteID) {
    axios.delete(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes/${noteID}`)
      .then((response) => {
        this.setState({
          userNotes: response.data.notes,
        })
      })
  }

  triggerEditCommentForm(currentComment, commentID) {
    this.setState({
      editComment: currentComment,
      editForm: true,
      editCommentID: commentID
    })
  }

  triggerEditNoteForm(currentNote, noteID) {
    this.setState({
      editNote: currentNote,
      editNoteForm: true,
      editNoteID: noteID,
    })
  }

  handleFormClose = () => {
    this.setState({
      editForm: false,
      editNoteForm: false,
    })
  }

  //Handles the user form submission and will post to the appropriate route
  handleSubmit = (event) => {
    event.preventDefault()
    let url, method, data
    if (localStorage.userID) {
      switch(event.target.name) {
        case 'comments':
          method = 'post'
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments`
          data = {
            user_id: localStorage.userID,
            username: localStorage.username,
            movie_id: this.props.currentMovie.id,
            comment: this.state.comment,
          }
          break
        case 'notes':
          method = 'post'
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes`
          data = {
            user_id: localStorage.userID,
            username: localStorage.username,
            movie_id: this.props.currentMovie.id,
            note: this.state.note,
          }
          break
        case 'editComments':
          method = 'put'
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments/${this.state.editCommentID}`
          data = {
            comment: this.state.editComment,
          }
          break
        case 'editNotes':
          method = 'put'
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes/${this.state.editNoteID}`
          data = {
            note: this.state.editNote,
          }
          break
        default:
          throw new Error(`Unknown event type $(data.type}`);
      }

      // This will either post a new comment or a new note for the user
      axios({
        method: method,
        url: url,
        data: data,
      })
      .then((response) => {
        switch (response.data.type){
          case 'comment':
            this.setState({
              currentMovieComments: [...this.state.currentMovieComments, response.data.new_comment],
              comment: '',
              note: '',
            })
            break
          case 'note':
            this.setState({
              userNotes: [...this.state.userNotes, response.data.note],
              note: '',
              comment: '',
            })
          break
          case 'editedComment':
            this.setState({
              currentMovieComments: response.data.comments,
              editForm: false,
            })
            break
          case 'editedNote':
            this.setState({
              userNotes: response.data.notes,
              editNoteForm: false,
            })
            break
          default:
            throw new Error(`Unknown event type $(response.data.type}`);
        }
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      alert('Please login before you make a comment or a note!')
    }
  }

  render() {
    const currentMovie = this.props.currentMovie
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          contentContainerStyle={{background: 'red'}}
        >
          <Tab label="DETAILS" icon={<Face/>} style={{background:"black"}} value={0} />
          <Tab label="FILM" icon={<Videocam/>} style={{background:"black"}} value={1} />
          <Tab label="NOTES" icon={<Create/>} style={{background:"black"}} value={2} />
          <Tab label="COMMENTS" icon={<Forum/>} style={{background:"black"}} value={3} />
          <Tab label="CLOSE" icon={<Clear/>} onClick={this.handleCloseClick} style={{background:"black"}} value={4}/>

        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} >

          {/* This is the tab for the film & story details */}
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <DetailTab currentMovie={currentMovie} scrollStyles={scrollStyles.headline} />
          </div>


          {/* This is the tab for film details, not the story*/}
          <div className="detailed-card-content non-scrolling-slides-relative" style={scrollStyles.slide}>
            <FilmTab currentMovie={currentMovie} />
          </div>


          {/* This is the tab for user notes */}
          <div className="slides-to-scroll-relative">
            <div className="detailed-card-content slides-to-scroll-absolute" style={scrollStyles.slide}>
              <form onSubmit={this.handleSubmit.bind(this)} name='notes'>
                <TextField hintText='Enter your note below' floatingLabelText='Enter your own note about this movie here' >
                  <input onChange={this.handleFormChange} name='note' type='text' value={this.state.note} style={{color: "white", position: "absolute", bottom: "0"}}/>
                </TextField>
              </form>
              {this.state.userNotes ? this.state.userNotes.map((note, index) => {
                return (

                  <div className="notes" key={note.id}>
                    <p key={index}>{note.note}</p>
                    <button onClick={this.deleteNote.bind(this, note.id)}>Delete</button>
                    <button onClick={this.triggerEditNoteForm.bind(this, note.note, note.id)}>Edit</button>
                       { this.state.editNoteForm ?
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
                            <RaisedButton label="Update!" primary={true} type="submit"/>
                            </form>
                          </Dialog>
                        : false}
                  </div>
                )
              }) : null
              }
            </div>
          </div>

          {/* This is the tab for user comments */}
          <div className="slides-to-scroll-relative">
            {/* Trying to make ONLY comments and notes slides scroll, not the details & film tabs */}
            <div className="detailed-card-content slides-to-scroll-absolute" style={scrollStyles.slide}>
              <form onSubmit={this.handleSubmit} name='comments'>
                <TextField className="detailed-card-inputs" hintText='Enter your comment below' floatingLabelText='Enter a comment about this movie here' >
                  <input onChange={this.handleFormChange} name='comment' type='text' value={this.state.comment} style={{color: "white"}}/>
                </TextField>
              </form>
              {this.state.currentMovieComments ? this.state.currentMovieComments.map((comment, index) => {
                return (
                  <div className="comment" key={comment.id}>

                    <p key={comment.comment}><span>{comment.username}</span> : {comment.comment}</p>
                    {Number(localStorage.userID) === comment.user_id ?
                      <div role='presentation'>
                        <button onClick={this.deleteComment.bind(this, comment.id)} role='presentation'>Delete</button>
                        <button onClick={this.triggerEditCommentForm.bind(this, comment.comment, comment.id)} role='presentation'>Edit</button>
                        { this.state.editForm ?
                          <Dialog
                            title="Edit your comment"
                            modal={false}
                            open={this.state.editForm}
                            onRequestClose={this.handleFormClose}
                          >
                            <form onSubmit={this.handleSubmit} name="editComments">
                              <TextField floatingLabelText="Comment" fullWidth={true}>
                                <input onChange={this.handleFormChange} type="text" name="editComment" value={this.state.editComment} />
                              </TextField>
                            <RaisedButton label="Change!" primary={true} type="submit"/>
                            </form>
                          </Dialog>
                        : false}
                      </div>
                    : ''}
                  </div>
                )
              }) : null
              }
            </div>
          </div>
        </SwipeableViews>
      </div>

    );
  }
}

// ReactDOM.render(<Example />, document.getElementById('example'));
export default DetailedTabs;
