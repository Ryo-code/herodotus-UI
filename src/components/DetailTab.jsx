import React, {Component} from 'react'
import MovieSubmission from '../containers/MovieSubmission.jsx'
import RaisedButton from 'material-ui/RaisedButton'

export default class DetailTab extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
    }
  }

  showSubmissionForm = () => {
    this.setState({
      showForm: true,
    })
  }

  handleClose = () => {
    this.setState({
      showForm: false,
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
        <h2 style={this.props.scrollStyles}>{currentMovie.title}</h2>
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
        <button onClick={this.showSubmissionForm}>Click here to submit your own movie!</button>
        {this.state.showForm ? <MovieSubmission showForm={this.state.showForm} /> : null}
      </div>
    )
  }
}
