import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import FontIcon from 'material-ui/FontIcon';
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
            <h2 style={scrollStyles.headline}>{this.props.stuff.title}</h2>
            <p>{this.props.stuff.year}</p>
            <p>{this.props.stuff.plot}</p>
            <p>Star rating... {this.props.stuff.imdbrating / 2}</p>
            <p>Set in: (year)</p>
            <p>Era:</p>
            <p>Location(s): (locations)</p>
            <p>Genre(s): {this.props.stuff.genre}</p>
            <p>(BUTTON FOR ADDING TO LIST)</p>


          </div>
          <div style={scrollStyles.slide}>
            <p>IMDB Rating: {this.props.stuff.imdbrating}</p>
            <p>Metascore:</p> {/*IF it exists*/}
            <p></p>
            <p>Country(ies): {this.props.stuff.country}</p>

            <p>Runtime: {this.props.stuff.runtime}</p>
            <p>Director: {this.props.stuff.director}</p>
            <p>Main actor(s): {this.props.stuff.actors}</p>
            <p>Awards: {this.props.stuff.awards}</p> {/*IF it exists*/}
            <p>Rated: {this.props.stuff.rated}</p>
            <p></p>
            <p></p>


          </div>
          <div style={scrollStyles.slide}>
            <p>keywords: {this.props.stuff.keywords}</p>
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
