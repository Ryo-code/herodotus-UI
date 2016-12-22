import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import SearchBar from '../components/SearchBar.jsx'
import AdvancedSearchBox from '../components/AdvancedSearchBox.jsx'


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

        <AdvancedSearchBox
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}
        />
      </nav>
    );
  }
}

export default NavBar;
