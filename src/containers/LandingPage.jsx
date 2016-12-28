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
      email: '',
      password: '',
      password_confirmation: '',
      registrationOpen: false,
      loginEmail: '',
      loginPassword: '',
      loginOpen: false,
      signedIn: false,
    }
  }

  // All registration functions are below
  handleRegistrationOpen = () => {
    this.setState({ registrationOpen: true });
  };

  handleRegistrationClose = () => {
    this.setState({ registrationOpen: false });
  }

  handleRegistrationSubmit = (event) => {
    event.preventDefault()
    const { email, password, password_confirmation } = this.state

    axios.post('http://0.0.0.0:3000/users', {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    })
    .then((response) => {
      localStorage.userID = response.data.user.id
      localStorage.email = response.data.user.email
      localStorage.signedIn = response.data.signed_in
      browserHistory.push('/movies')
    })
    .catch((response) => {
      console.log(response)
    })
  }

  // All login functions are below
  handleLoginOpen = () => {
    this.setState({ loginOpen: true });
  };

  handleLoginClose = () => {
    this.setState({ loginOpen: false });
  }

  handleLoginSubmit = (event) => {
    event.preventDefault()
    const { loginEmail, loginPassword } = this.state

    axios.post('http://0.0.0.0:3000/users/sign_in', {
      username: loginEmail,
      password: loginPassword,
    })
    .then((response) => {
      localStorage.userID = response.data.user.id
      localStorage.email = response.data.user.email
      localStorage.signedIn = response.data.signed_in
      browserHistory.push('/movies')
    })
    .catch((response) => {
      console.log(response)
    })
  }


  // Sets the values of the target field
  handleFormChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    const { setLoggedInTrue } = this.props;  // NOTE: same as -> const setLoggedInTrue = this.props.setLoggedInTrue;
    const { email, password, password_confirmation, loginEmail, loginPassword } = this.state
    return (
      <MuiThemeProvider>

        <div className="col-md-2 col-sm-4 col-xs-6">
          not logged in...
          <button onClick={setLoggedInTrue}>
            Please login indeed...
          </button>
          <br/>
          <div className="">
            Maybe an elaborate video will go here...
            <br></br>
            Jeff: an elaborate video of how herodotus came to be
          </div>

          <RaisedButton label="Registration" onTouchTap={this.handleRegistrationOpen} />
            <Dialog
              title="Registration"
              modal={false}
              open={this.state.registrationOpen}
              onRequestClose={this.handleRegistrationClose}
            >
            <form onSubmit={this.handleRegistrationSubmit}>

            {/* REGISTRATION BUTTON AND FIELDS BELOW*/}

            <TextField hintText="awesome@username.com" floatingLabelText="Email" fullWidth={true}>
              <input onChange={this.handleFormChange} type="email" name="email" value={email} />
            </TextField>

            <TextField hintText="password123" floatingLabelText="Password" fullWidth={true}>
              <input onChange={this.handleFormChange} type="password" name="password" value={password} />
            </TextField>

            <TextField floatingLabelText="Password Confirmation" fullWidth={true}>
              <input onChange={this.handleFormChange} type="password" name="password_confirmation" value={password_confirmation} />
            </TextField>

            <RaisedButton label="Register" primary={true} style={style} type="submit"/>
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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LandingPage;
