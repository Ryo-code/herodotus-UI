import React, {Component} from 'react';
// import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      registrationOpen: false,
      loginEmail: '',
      loginPassword: '',
      loginOpen: false,
    }
  }

  // All registration functions are below
  handleRegistrationOpen = () => {
    this.setState({registrationOpen: true});
  };

  handleRegistrationClose = () => {
    this.setState({registrationOpen: false});
  }

  // All login functions are below
  handleLoginOpen = () => {
    this.setState({loginOpen: true});
  };

  handleLoginClose = () => {
    this.setState({loginOpen: false});
  }

  render() {
    return (
      <MuiThemeProvider>

        <div className="landing-page">
          <RaisedButton label="Register" onTouchTap={this.handleRegistrationOpen} />
          {
            this.state.registrationOpen ?
              <RegistrationForm
                registrationOpen={this.state.registrationOpen}
                registrationClose={this.handleRegistrationClose}
              />
            : false
          }
            　
          <RaisedButton label="Login" onTouchTap={this.handleLoginOpen} />
          {
            this.state.loginOpen ?
              <LoginForm
                loginOpen={this.state.loginOpen}
                loginClose={this.handleLoginClose}
              />
            : false
          }

          {/* <footer className="login-registration-bar">
            hi
          </footer> */}

          <br/>
          <br/>
          <img src='../herodotus-black-on-transparent.png' role='presentation' className="landing-page-fancy-text"/>
          <br/>
          <br/>

          <img src='../battle-of-marathon.png' role='presentation' className="temp-landing"/>
          <img src='../herodotus-tagline-transparent-BG.png' role='presentation' className="landing-page-fancy-text"/>
          <br/>
          <br/>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default LandingPage;
