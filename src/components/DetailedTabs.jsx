import React from 'react';
// import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField'
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
    // fontWeight: 400,
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
      currentMovieComments: [],
    };
  }

  componentDidMount() {
    axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}`)
      .then((response) => {
        this.setState({currentMovieComments: response.data})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentMovie !== this.props.currentMovie) {
      axios.get(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}`)
        .then((response) => {
          this.setState({currentMovieComments: response.data})
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  handleCloseClick = () => {
    this.props.hideCard()
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  handleCommentSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://0.0.0.0:3000/movies/${this.props.currentMovie.id}/comments`, {
      user_id: localStorage.userID,
      username: localStorage.username,
      movie_id: this.props.currentMovie.id,
      comment: this.state.comment,
    })
    .then((response) => {
      this.setState({
        currentMovieComments: [...this.state.currentMovieComments, response.data.new_comment],
        comment: '',
      })
    })
    .catch((error) => {
      console.log(error)
    })
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
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <h2 style={scrollStyles.headline}>{currentMovie.title}</h2>
            <p>{currentMovie.year}</p>
            <p>{currentMovie.plot}</p>
            <p>{currentMovie.imbdrating}</p>

            <div className="star-ratings-sprite">
              <span style={starRatingStyle}> </span>
            </div>

            <p><span>Set in:</span> {currentMovie.set_start_year ? currentMovie.set_start_year : "N/A"} {currentMovie.set_start_year ? currentMovie.start_ad_bc : ''}</p>
            <p><span>Era:</span>    </p>
            <p><span>Location(s):</span> {currentMovie.country}</p>
            <p><span>Genre(s):</span> {currentMovie.genre}</p>
            <p>(BUTTON FOR ADDING TO LIST)</p>

          </div>
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <p><span>IMDB Rating:</span> {currentMovie.imdbrating} {currentMovie.metascore ? `| Metascore: ${currentMovie.metascore}` : ""}</p> {/*IF it exists*/}
            <p><span>Runtime:</span> {currentMovie.runtime}</p>
            <p><span>Country(ies):</span> {currentMovie.country}</p>
            <p><span>Awards:</span> {currentMovie.awards ? currentMovie.metascore : ""}</p> {/*IF it exists*/}
            <p><span>Director:</span> {currentMovie.director}</p>
            <p><span>Main actor(s):</span> {currentMovie.actors}</p>
            <p><span>Rated:</span> {currentMovie.rated}</p>
            <p></p>
            <p></p>

          </div>
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <h1>User self notes will go in here</h1>
          </div>
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <form onSubmit={this.handleCommentSubmit}>
              <TextField hintText='Enter your comment below' floatingLabelText='Enter a comment about this movie here' >
                <input onChange={this.handleCommentChange} name='comment' type='text' value={this.state.comment} style={{color: "white"}}/>
              </TextField>
            </form>
            {this.state.currentMovieComments ? this.state.currentMovieComments.map((comment, index) => {
              return (
                <p key={index}><span>{comment.username}</span> : {comment.comment}</p>
              )
            }) : null
            }
          </div>
        </SwipeableViews>
      </div>

      // <Tabs
      //   onChange={this.handleChange}
      //   value={this.state.slideIndex}
      // >
      //   <Tab
      //     icon={<Face/>}
      //     label="STORY"
      //     className="detailed-card-tab"
      //   >
      //     test text for tab 1
      //   </Tab>
      //   <Tab
      //     icon={<Videocam/>}
      //     label="FILM"
      //     className="detailed-card-tab"
      //   >
      //     test text for tab 2
      //   </Tab>
      //   <Tab
      //     icon={<Create/>}
      //     label="NOTES"
      //     className="detailed-card-tab"
      //   />
      //   <Tab
      //     icon={<Forum/>}
      //     label="COMMENTS"
      //     className="detailed-card-tab"
      //   />
      // </Tabs>
    );
  }
}

// ReactDOM.render(<Example />, document.getElementById('example'));
export default DetailedTabs;
