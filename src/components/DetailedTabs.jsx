import React from 'react';
import ReactDOM from 'react-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import Create from 'material-ui/svg-icons/content/create';
import Face from 'material-ui/svg-icons/action/face';
import Forum from 'material-ui/svg-icons/communication/forum';
import Videocam from 'material-ui/svg-icons/av/videocam';

class DetailedTabs extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab
          icon={<Face/>}
          label="STORY"
          className="detailed-card-tab"
        >
          test text for tab 1
        </Tab>
        <Tab
          icon={<Videocam/>}
          label="FILM"
          className="detailed-card-tab"
        >
          test text for tab 2
        </Tab>
        <Tab
          icon={<Create/>}
          label="NOTES"
          className="detailed-card-tab"
        />
        <Tab
          icon={<Forum/>}
          label="COMMENTS"
          className="detailed-card-tab"
        />
      </Tabs>
    );
  }
}

// ReactDOM.render(<Example />, document.getElementById('example'));
export default DetailedTabs;
