import React from 'react';
// import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'

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

class DetailedTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      comment: '',
      note: '',
      editComment: '',
      currentMovieComments: [],
      userNotes: [],
      editForm: false,
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
      this.setState({currentMovieComments: response.data.comments})
    })
  }

  triggerEditCommentForm(currentComment, commentID) {
    this.setState({
      editComment: currentComment,
      editForm: true,
      editCommentID: commentID
    })
  }

  handleEditFormClose = () => {
    this.setState({
      editForm: false,
    })
  }

  currentCommentID(id) {
    console.log(id)
  }

  //Handles the user form submission and will post to the appropriate route
  handleSubmit = (event) => {
    event.preventDefault()
    let url, method, data
    if (localStorage.userID) {
      switch(event.target.name) {
        case 'comments':
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments`
          method = 'post'
          data = {
            user_id: localStorage.userID,
            username: localStorage.username,
            movie_id: this.props.currentMovie.id,
            comment: this.state.comment,
          }
          break
        case 'notes':
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/users/${localStorage.userID}/notes`
          method = 'post'
          data = {
            user_id: localStorage.userID,
            username: localStorage.username,
            movie_id: this.props.currentMovie.id,
            note: this.state.note,
          }
          break
        case 'editComments':
          url = `http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments/${this.state.editCommentID}`
          method = 'put'
          data = {
            comment: this.state.editComment,
          }
          break
        default:
        break
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
          default:
          break
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
    const starRatingPercentage = (currentMovie.imdbrating / 2) / 5 * 100
    const starRatingStyle = {
      background: 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2605/star-rating-sprite.png") repeat-x',
      backgroundPosition: '0 100%',
      float: 'left',
      height: '21px',
      display: 'block',
      width: `${starRatingPercentage}%`
    }
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
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          // style={{height:"35em"}} //attempting to make it scroll if there's tons of text
        >

          {/* This is the tab for the film details */}
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <h2 style={scrollStyles.headline}>{currentMovie.title}</h2>
            <p>{currentMovie.year}</p>
            <p>{currentMovie.plot}</p>
            <p>{currentMovie.imbdrating}</p>

            <div className="star-ratings-sprite">
              <span style={starRatingStyle}> </span>
            </div>

            <p><span>Story set in:</span> {currentMovie.set_start_year ? currentMovie.set_start_year : "N/A"} {currentMovie.set_start_year ? currentMovie.start_ad_bc : ''}</p>
            <p><span>Setting (location):</span> {currentMovie.setting_location}</p>
            <p><span>Genre(s):</span> {currentMovie.genre}</p>
            <p>(BUTTON FOR ADDING TO LIST)</p>
          </div>

          {/* This is the tab for film details of actual film */}
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <p><span>IMDB Rating:</span> {currentMovie.imdbrating} {currentMovie.metascore ? `| Metascore: ${currentMovie.metascore}` : ""}</p> {/*IF it exists*/}
            <p><span>Runtime:</span> {currentMovie.runtime}</p>
            <p><span>Country(ies):</span> {currentMovie.country}</p>
            <p><span>Awards:</span> {currentMovie.awards ? currentMovie.awards : ""}</p> {/*IF it exists*/}
            <p><span>Director:</span> {currentMovie.director}</p>
            <p><span>Main actor(s):</span> {currentMovie.actors}</p>
            <p><span>Rated:</span> {currentMovie.rated}</p>
            <p></p>
            <p></p>
          </div>

          {/* This is the tab for user notes */}
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <form onSubmit={this.handleSubmit.bind(this)} name='notes'>
              <TextField hintText='Enter your note below' floatingLabelText='Enter your own note about this movie here' >
                <input onChange={this.handleFormChange} name='note' type='text' value={this.state.note} style={{color: "white"}}/>
              </TextField>
            </form>
            {this.state.userNotes ? this.state.userNotes.map((note, index) => {
              return (
                <p key={index}>{note.note}</p>
              )
            }) : null
            }
          </div>

          {/* This is the tab for user comments */}
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <form onSubmit={this.handleSubmit} name='comments'>
              <TextField hintText='Enter your comment below' floatingLabelText='Enter a comment about this movie here' >
                <input onChange={this.handleFormChange} name='comment' type='text' value={this.state.comment} style={{color: "white"}}/>
              </TextField>
            </form>
            {this.state.currentMovieComments ? this.state.currentMovieComments.map((comment, index) => {
              return (
                <div key={comment.id}>
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
                          onRequestClose={this.handleEditFormClose}
                        >
                        <form onSubmit={this.handleSubmit} name="editComments">
                        <TextField floatingLabelText="Comment" fullWidth={true}>
                          <input onChange={this.handleFormChange} type="text" name="editComment" value={this.state.editComment} />
                        </TextField>
                        <RaisedButton label="Change!" primary={true} type="submit"/>
                        </form>
                        </Dialog>
                        : false
                      }
                    </div>
                    : ''}
                </div>
              )
            }) : null
            }
          </div>
        </SwipeableViews>
      </div>

    );
  }
}

// ReactDOM.render(<Example />, document.getElementById('example'));
export default DetailedTabs;
