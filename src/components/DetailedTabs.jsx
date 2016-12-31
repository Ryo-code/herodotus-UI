import React from 'react';
// import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

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
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  handleCloseClick = () => {
    this.props.hideCard()
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
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          // style={{height:"35em"}} //attempting to make it scroll if there's tons of text
        >
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <h2 style={scrollStyles.headline}>{currentMovie.title}</h2>
            <p>{currentMovie.year}</p>
            <p>{currentMovie.plot}</p>
            <p><span>Star rating:</span> {currentMovie.imdbrating / 2}</p>
            <p><span>Set in:</span> {currentMovie.set_start_year ? currentMovie.set_start_year : "N/A"} {currentMovie.set_start_year ? currentMovie.start_ad_bc : ''}</p>
            <p><span>Era:</span>    </p>
            <p><span>Location(s):</span> {currentMovie.country}</p>
            <p><span>Genre(s):</span> {currentMovie.genre}</p>
            <p>(BUTTON FOR ADDING TO LIST)</p>


          </div>
          <div className="detailed-card-content" style={scrollStyles.slide}>
            <p><span>IMDB Rating:</span> {currentMovie.imdbrating} {currentMovie.metascore ? "| Metascore: " + currentMovie.metascore : ""}</p> {/*IF it exists*/}
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
            <p>keywords:
            {
              currentMovie.keywords
            }
            </p>
          </div>
          <div className="detailed-card-content" style={scrollStyles.slide}>
            slide n°4
          </div>
        </SwipeableViews>
      </div>

    );
  }
}

// ReactDOM.render(<Example />, document.getElementById('example'));
export default DetailedTabs;
