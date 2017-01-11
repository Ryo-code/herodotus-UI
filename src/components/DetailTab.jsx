import React, {Component} from 'react'

export default class DetailTab extends Component {

  state = {showForm: false,}

  showSubmissionForm = () => {
    this.setState({showForm: true,})
  }

  handleClose = () => {
    this.setState({showForm: false,})
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

        <p><span>Story set in: </span>
        {currentMovie.set_start_year ? currentMovie.set_start_year : "unspecified"}
        {currentMovie.set_start_year ? currentMovie.start_ad_bc : ''}
        {currentMovie.set_start_year_accurate === 'no' ? '*' : ''}
        &nbsp;&nbsp;--&nbsp;&nbsp;
        {currentMovie.set_end_year ? currentMovie.set_end_year : "unspecified"}
        {currentMovie.set_end_year ? currentMovie.start_ad_bc : ''}
        {currentMovie.set_end_year_accurate === 'no' ? '*' : ''}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {currentMovie.set_start_year_accurate === 'no' || currentMovie.set_end_year_accurate === 'no' ? '(*approximate year)' : ''}
        </p>

        <p><span>Setting (location):</span> {currentMovie.setting_location}</p>
        <p><span>Genre(s):</span> {currentMovie.genre}</p>
      </div>
    )
  }
}
