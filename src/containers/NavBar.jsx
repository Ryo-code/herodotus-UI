import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import AdvancedSearchBox from '../components/AdvancedSearchBox.jsx'
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router'
import axios from 'axios'
import {browserHistory} from 'react-router'
import LoginForm from '../components/LoginForm.jsx'
import RegistrationForm from '../components/RegistrationForm.jsx'

class NavBar extends Component {

  state = {
    loginOpen: false,
    registrationOpen: false,
  }

  handleLogout = () => {
    axios.get('http://0.0.0.0:3000/users/sign_out')
    .then(() => {
      localStorage.clear()
      browserHistory.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  handleGuestClick = () => {
    localStorage.guest = true
    browserHistory.push('/movies')
  }

  render() {
    return (
      <nav>
        <AppBar
          style={{
            background: 'rgba(0, 0, 0, 0.88)',
            paddingLeft: '35px',
            paddingRight: '20px',
            position: 'fixed',
            top: '0',
            left: '0',
            display: 'flex',
            alignItems: 'center',
          }}

          title={`Welcome, ${localStorage.username ? localStorage.username : 'Guest'}`}
          // iconClassNameRight="muidocs-icon-navigation-expand-more"

          iconElementLeft={<Link to="/movies"><img src='../herodotus-white-on-transparent.png' role='presentation'/></Link>}
        >
        <RaisedButton label="Login" onTouchTap={this.handleLoginOpen} />
        {
          this.state.loginOpen ?
            <LoginForm
              loginOpen={this.state.loginOpen}
              loginClose={this.handleLoginClose}
            />
          : false
        }
        <RaisedButton label="Register" onTouchTap={this.handleRegistrationOpen} />
        {
          this.state.registrationOpen ?
            <RegistrationForm
              registrationOpen={this.state.registrationOpen}
              registrationClose={this.handleRegistrationClose}
            />
          : false
        }
        { localStorage.guest ?
          <AdvancedSearchBox
            className="nav-button"
            updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
            updateToSearchResults={this.props.updateToSearchResults}
          /> : <RaisedButton label="Enter as Guest" onTouchTap={this.handleGuestClick} />
　       }
        <RaisedButton
          className="nav-button"
          label="Logout"
          onTouchTap={this.handleLogout}
        />

        </AppBar>
      </nav>
    );
  }
}

export default NavBar;
