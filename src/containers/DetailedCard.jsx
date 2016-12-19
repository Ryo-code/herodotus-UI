import React, {Component} from 'react';
import DetailedTabs from './../components/DetailedTabs.jsx';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  // marginRight: 20,
};

class DetailedCard extends Component {

  render() {
    return (
      <div className="detailed-card">
        <img role="presentation" className="big-movie-poster" src={this.props.stuff.poster}/>
        <div className="stuff-next-to-poster">
          <DetailedTabs stuff={this.props.stuff} />
          {console.log(this.props.stuff)}

          {/* <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p> */}
        </div>
      </div>

    );
  }
}

export default DetailedCard;

// t.string :title
//       t.integer :year
//       t.string :rated
//       t.string :released
//       t.string :runtime
//       t.string :genre
//       t.string :director
//       t.string :writer
//       t.string :actors
//       t.text :plot
//       t.string :language
//       t.string :country
//       t.string :awards
//       t.string :poster
//       t.integer :metascore
//       t.integer :imdbrating
//       t.string :imdbid
//       t.text :keywords
//       t.text :summary_text
