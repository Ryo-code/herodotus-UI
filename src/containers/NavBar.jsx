import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
// import SearchBar from '../components/SearchBar.jsx'
import AdvancedSearchBox from '../components/AdvancedSearchBox.jsx'


class NavBar extends Component {

  render() {

    return (
      <nav>
        <AppBar
          style={{background: 'rgba(0, 0, 0, 0.88)', padding: '15px', position: 'fixed', top: '0', left: '0'}}
          title="Herodotus"
          // iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementLeft={<img src='../herodotus-white-on-black.png' role='presentation'/>}
        >
        <p>{localStorage.username ? localStorage.username : ''}</p>
        <AdvancedSearchBox
          className="advanced-search-button"
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}
        />

        </AppBar>

      </nav>
    );
  }
}

export default NavBar;

// <SearchBar updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}/>
