import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import axios from 'axios'
import DetailTab from './DetailTab'
import FilmTab from './FilmTab'
import NoteTab from './NoteTab'
import CommentTab from './CommentTab'

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
      currentMovieComments: [],
      userNotes: [],
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

  // NEED
  handleNotes = (newNote, noteType) => {
    if (noteType === 'newNote'){
      this.setState({userNotes: [...this.state.userNotes, newNote]})
    } else if (noteType === 'editedNote' || noteType === 'deletedNote') {
      this.setState({userNotes: newNote,})
    }
  }

  handleComments = (newComment, commentType) => {
    if (commentType === 'newComment') {
      this.setState({currentMovieComments: [...this.state.currentMovieComments, newComment]})
    } else if (commentType === 'editedComment' || commentType === 'deletedComment') {
      this.setState({currentMovieComments: newComment,})
    }
  }

  render() {
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
            <DetailTab currentMovie={this.props.currentMovie} scrollStyles={scrollStyles.headline} />
          </div>


          {/* This is the tab for film details, not the story*/}
          <div className="detailed-card-content non-scrolling-slides-relative" style={scrollStyles.slide}>
            <FilmTab currentMovie={this.props.currentMovie} />
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
            {/* Trying to make ONLY comments and notes slides scroll, not the details & film tabs */}
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <CommentTab
              currentMovieComments={this.state.currentMovieComments}
              currentMovie={this.props.currentMovie}
              newUserComment={this.handleComments}
            />
          </div>
        </SwipeableViews>
      </div>

    );
  }
}

// ReactDOM.render(<Example />, document.getElementById('example'));
export default DetailedTabs;
