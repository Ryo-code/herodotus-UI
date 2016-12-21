import React from 'react';
// import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

// import FontIcon from 'material-ui/FontIcon';
import Create from 'material-ui/svg-icons/content/create';
import Face from 'material-ui/svg-icons/action/face';
import Forum from 'material-ui/svg-icons/communication/forum';
import Videocam from 'material-ui/svg-icons/av/videocam';

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

        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          // style={{height:"35em"}} //attempting to make it scroll if there's tons of text
        >
          <div style={scrollStyles.slide}>
            <h2 style={scrollStyles.headline}>{currentMovie.title}</h2>
            <p>{currentMovie.year}</p>
            <p>{currentMovie.plot}</p>
            <p>Star rating... {currentMovie.imdbrating / 2}</p>
            <p>Set in: {currentMovie.set_start_year ? currentMovie.set_start_year : "N/A"} {currentMovie.set_start_year ? currentMovie.start_ad_bc : ''}</p>
            <p>Era:</p>
            <p>Location(s): {currentMovie.country}</p>
            <p>Genre(s): {currentMovie.genre}</p>
            <p>(BUTTON FOR ADDING TO LIST)</p>


          </div>
          <div style={scrollStyles.slide}>
            <p>IMDB Rating: {currentMovie.imdbrating}</p>
            <p>Metascore: {currentMovie.metascore ? currentMovie.metascore : "N/A"}</p> {/*IF it exists*/}
            <p></p>
            <p>Country(ies): {currentMovie.country}</p>

            <p>Runtime: {currentMovie.runtime}</p>
            <p>Director: {currentMovie.director}</p>
            <p>Main actor(s): {currentMovie.actors}</p>
            <p>Awards: {currentMovie.awards ? currentMovie.metascore : "N/A"}</p> {/*IF it exists*/}
            <p>Rated: {currentMovie.rated}</p>
            <p></p>
            <p></p>


          </div>
          <div style={scrollStyles.slide}>
            <p>keywords: {currentMovie.keywords}</p>
          </div>
          <div style={scrollStyles.slide}>
            slide n°4
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
