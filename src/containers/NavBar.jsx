import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
// import SearchBar from '../components/SearchBar.jsx'
import AdvancedSearchBox from '../components/AdvancedSearchBox.jsx'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'
import axios from 'axios'
import {browserHistory} from 'react-router'

class NavBar extends Component {

  handleLogout = () => {
    axios.get('http://0.0.0.0:3000/users/sign_out')
    .then((repsonse) => {
      localStorage.clear()
      browserHistory.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {

    return (
      <nav>
        <AppBar
          style={{background: 'rgba(0, 0, 0, 0.88)', paddingLeft: '25px', paddingRight: '15px', position: 'fixed', top: '0', left: '0'}}
          title={`Welcome to Herodotus, ${localStorage.username}`}
          // iconClassNameRight="muidocs-icon-navigation-expand-more"

          iconElementLeft={<Link to="/movies"><img src='../herodotus-white-on-transparent.png' role='presentation'/></Link>}
        >
        <AdvancedSearchBox
          className="advanced-search-button"
          updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
          updateToSearchResults={this.props.updateToSearchResults}
        />
        <RaisedButton label="Logout" onTouchTap={this.handleLogout} />

        </AppBar>
      </nav>
    );
  }
}

export default NavBar;

// <SearchBar updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}/>
