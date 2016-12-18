import React, {Component} from 'react';
import FilmRow from './FilmRow.jsx';
import DetailedCard from './DetailedCard';
// import MyComponent from '../components/DetailedTabs'
// const data = require('./media.json');
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class FilmWall extends Component {

  render() {
    return (
      <div className="container">

        <FilmRow moviesTest={this.props.movies}/>
        <FilmRow moviesTest={this.props.movies}/>

        <DetailedCard/>
        {/* <MyComponent/> */}
      </div>
    );
  }
}

export default FilmWall;
