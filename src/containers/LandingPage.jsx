import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {browserHistory} from 'react-router'

const style = {
  margin: 12,
  float: "right"
};

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

  handleRegistrationSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state

    axios.post('http://0.0.0.0:3000/users', {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    })
    .then((response) => {
      localStorage.username = response.data.user.username
      localStorage.userID = response.data.user.id
      localStorage.email = response.data.user.email
      localStorage.signedIn = response.data.signed_in
      browserHistory.push('/movies')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // All login functions are below
  handleLoginOpen = () => {
    this.setState({loginOpen: true});
  };

  handleLoginClose = () => {
    this.setState({loginOpen: false});
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    const {loginEmail, loginPassword} = this.state

    axios.post('http://0.0.0.0:3000/users/sign_in', {
      username: loginEmail,
      password: loginPassword,
    })
    .then((response) => {
      localStorage.username = response.data.user.username
      localStorage.userID = response.data.user.id
      localStorage.email = response.data.user.email
      localStorage.signedIn = response.data.signed_in
      browserHistory.push('/movies')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // Sets the values of the target field
  handleFormChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {username, email, password, password_confirmation, loginEmail, loginPassword} = this.state
    return (
      <MuiThemeProvider>

        <div className="landing-page">
          <RaisedButton label="Register" onTouchTap={this.handleRegistrationOpen} />
          <Dialog
            title="Registration"
            modal={false}
            open={this.state.registrationOpen}
            onRequestClose={this.handleRegistrationClose}
            >
              <form onSubmit={this.handleRegistrationSubmit}>

                {/* REGISTRATION BUTTON AND FIELDS BELOW*/}

                <TextField hintText="awesomeUsername" floatingLabelText="Username" fullWidth={true}>
                  <input onChange={this.handleFormChange} type="text" name="username" value={username} />
                </TextField>

                <TextField hintText="awesome@email.com" floatingLabelText="Email" fullWidth={true}>
                  <input onChange={this.handleFormChange} type="email" name="email" value={email} />
                </TextField>

                <TextField hintText="somethingclever123" floatingLabelText="Password" fullWidth={true}>
                  <input onChange={this.handleFormChange} type="password" name="password" value={password} />
                </TextField>

                <TextField floatingLabelText="Password Confirmation" fullWidth={true}>
                  <input onChange={this.handleFormChange} type="password" name="password_confirmation" value={password_confirmation} />
                </TextField>

                <RaisedButton className="black-button" backgroundColor="black" style={{backgroundColor:"black"}} label="Register" primary={true} type="submit"/>
              </form>
            </Dialog>
            　
            {/* LOGIN BUTTON BELOW */}

            <RaisedButton label="Login" onTouchTap={this.handleLoginOpen} />
            <Dialog
              title="Login"
              modal={false}
              open={this.state.loginOpen}
              onRequestClose={this.handleLoginClose}
              >
                <form onSubmit={this.handleLoginSubmit}>

                  <TextField hintText="awesome@email.com" floatingLabelText="Email" fullWidth={true}>
                    <input onChange={this.handleFormChange} type="text" name="loginEmail" value={loginEmail} />
                  </TextField>

                  <TextField hintText="password123" floatingLabelText="Password" fullWidth={true}>
                    <input onChange={this.handleFormChange} type="password" name="loginPassword" value={loginPassword} />
                  </TextField>

                  <RaisedButton label="Login" primary={true} style={style} type="submit"/>
                </form>
              </Dialog>

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
