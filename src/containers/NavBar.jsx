import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from '../components/SearchBar.jsx'


class NavBar extends Component {

  render() {

    return (
      <nav>
        <AppBar
          title="Herodotus"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          // iconStyleRight="o"
        >
          <SearchBar updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}/>


        </AppBar>


        NAV BARRRRRRR
      </nav>
    );
  }
}

export default NavBar;
