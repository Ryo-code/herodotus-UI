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
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleFormChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { username, email, password, password_confirmation } = this.state
    axios.post(`http://0.0.0.0:3000/users/`, {
        username: username,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      })
      .then((response) => {
        browserHistory.push('/movies')
        console.log(response)
      })
      .catch((response) => {
        console.log(response)
      })
  }


  render() {
    const { setLoggedInTrue } = this.props;  // NOTE: same as -> const setLoggedInTrue = this.props.setLoggedInTrue;
    const { username, email, password, password_confirmation } = this.state
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

          <RaisedButton label="Registration" onTouchTap={this.handleOpen} />
            <Dialog
              title="Regstration"
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
            <form onSubmit={this.handleSubmit}>

            <TextField hintText="AwesomeUsername" floatingLabelText="Username" fullWidth={true}>
              <input onChange={this.handleFormChange} type="text" name="username" value={username} />
            </TextField>

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


          {/* <footer className="login-registration-bar">
            hi
          </footer> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default LandingPage;
