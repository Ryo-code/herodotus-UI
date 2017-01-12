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

  // Log's out any users
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

  // Handles registration form open
  handleRegistrationOpen = () => {
    this.setState({registrationOpen: true});
  };

  // Handles registration form close
  handleRegistrationClose = () => {
    this.setState({registrationOpen: false});
  }

  // Handles login form open
  handleLoginOpen = () => {
    this.setState({loginOpen: true});
  };

  // Handles login form close
  handleLoginClose = () => {
    this.setState({loginOpen: false});
  }

  // Handles the guest login
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
          iconElementLeft={<Link to="/movies"><img src='../herodotus-white-on-transparent.png' role='presentation'/></Link>}
        >
        {!localStorage.signedIn ?
          <div>
            {/*The login button*/}
            <RaisedButton label="Login" onTouchTap={this.handleLoginOpen} />
            {
              this.state.loginOpen ?
                <LoginForm
                  loginOpen={this.state.loginOpen}
                  loginClose={this.handleLoginClose}
                />
              : false
            }
          {/*The register button*/}
            <RaisedButton label="Register" onTouchTap={this.handleRegistrationOpen} />
            {
              this.state.registrationOpen ?
                <RegistrationForm
                  registrationOpen={this.state.registrationOpen}
                  registrationClose={this.handleRegistrationClose}
                />
              : false
            }
          </div> : null
        }

        {/*This button will allow guests to login in order to see the search box*/}
        { localStorage.guest ?
          <AdvancedSearchBox
            className="nav-button"
            updateMoviesFromSearchResult={this.props.updateMoviesFromSearchResult}
            updateToSearchResults={this.props.updateToSearchResults}
          /> : <RaisedButton label="Enter as Guest" onTouchTap={this.handleGuestClick} />
　       }

        {/*This will only show up for guest users or logged in users*/}
        {
          localStorage.guest || localStorage.signedIn ?
          <RaisedButton
            className="nav-button"
            label="Logout"
            onTouchTap={this.handleLogout}
          /> : null
        }
        </AppBar>
      </nav>
    );
  }
}

export default NavBar;
