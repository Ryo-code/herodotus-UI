import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';


class NavBar extends Component {

  render() {

    return (
      <nav>
        <AppBar
          title="Herodotus"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          // iconStyleRight="o"
        >
          <p>Some button goes here</p>
          <p>And maybe here</p>

        </AppBar>


        NAV BARRRRRRR
      </nav>
    );
  }
}

export default NavBar;
