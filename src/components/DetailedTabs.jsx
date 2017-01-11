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
import NoteTab from './NoteTab'
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
          this.setState({userNotes: response.data.notes,})
        })
        .catch((error) => {
          console.log(error)
        })
    }

    // This grabs all the comments of the specific movie
      axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}`)
        .then((response) => {
          this.setState({currentMovieComments: response.data.comments,})
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
            this.setState({userNotes: response.data.notes,})
          })
          .catch((error) => {
            console.log(error)
          })
      }

      // This grabs all the comments
      axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}`)
        .then((response) => {
          this.setState({currentMovieComments: response.data.comments,})
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  //Changes the slide tab
  handleChange = (value) => {
    this.setState({slideIndex: value,});
  }

  //Closes the card when the X is clicked
  handleCloseClick = () => {
    this.props.hideCard()
  }

  deleteComment(commentID) {
    axios.delete(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments/${commentID}`)
    .then((response) => {
      this.setState({currentMovieComments: response.data.comments,})
    })
  }

  // NEED
  handleNotes = (newNote, noteType) => {
    if (noteType === 'newNote'){
      this.setState({userNotes: [...this.state.userNotes, newNote]})
    } else if (noteType === 'editedNote' || noteType === 'deletedNote') {
      this.setState({userNotes: newNote})
    }
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
        case 'editComments':
          method = 'put'
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments/${this.state.editCommentID}`
          data = {comment: this.state.editComment,}
          break
        default:
          throw new Error(`Unknown event type $(data.type}`);
      }

      // This will post a new comment/note or update an exisiting comment/note
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
          case 'editedComment':
            this.setState({
              currentMovieComments: response.data.comments,
              editForm: false,
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
      <div className="test">
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
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <FilmTab currentMovie={currentMovie} />
          </div>


          {/* This is the tab for user notes */}
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <NoteTab
              userNotes={this.state.userNotes}
              currentMovie={this.props.currentMovie}
              newUserNote={this.handleNotes}
            />
          </div>

          {/* This is the tab for user comments */}
          <div className="comments-to-scroll-relative">
            {/* Trying to make ONLY comments and notes slides scroll, not the details & film tabs */}
            <div className="detailed-card-content comments-to-scroll-absolute" style={scrollStyles.slide}>
              <form onSubmit={this.handleSubmit} name='comments'>
                <TextField className="detailed-card-inputs" hintText='Enter your comment below' floatingLabelText='Enter a comment about this movie here' >
                  <input onChange={this.handleFormChange} name='comment' type='text' value={this.state.comment} style={{color: "white"}}/>
                </TextField>
              </form>
              {this.state.currentMovieComments.length > 0 ? this.state.currentMovieComments.map((comment, index) => {
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
              }) : 'This movie has no comments'
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
