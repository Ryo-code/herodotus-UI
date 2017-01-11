import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import {browserHistory} from 'react-router'

const style = {
  margin: 12,
  float: "right"
};

export default class LoginForm extends Component {

  state = {
    loginEmail: '',
    loginPassword: '',
  }

  // This handles the changes on the form
  handleFormChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  // This logs in the user
  handleSubmit = (event) => {
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

  render() {
    const {loginEmail, loginPassword} = this.state
    return (
      <Dialog
        title="Login"
        modal={false}
        open={this.props.loginOpen}
        onRequestClose={this.props.loginClose}
      >
        <form onSubmit={this.handleSubmit}>

          <TextField hintText="awesome@email.com" floatingLabelText="Email" fullWidth={true}>
            <input onChange={this.handleFormChange} type="text" name="loginEmail" value={loginEmail} />
          </TextField>

          <TextField hintText="password123" floatingLabelText="Password" fullWidth={true}>
            <input onChange={this.handleFormChange} type="password" name="loginPassword" value={loginPassword} />
          </TextField>

          <RaisedButton label="Login" backgroundColor="black" labelColor="white" type="submit"/>
        </form>
      </Dialog>
    )
  }
}
