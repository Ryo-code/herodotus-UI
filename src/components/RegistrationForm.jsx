import React, {Component} from 'react'
import TextField from 'material-ui/TextField'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios'
import {browserHistory} from 'react-router'

export default class RegistrationForm extends Component {

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  }

  // This handles the changes on the form
  handleFormChange = (event) => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  // This registers the user to the database
  handleSubmit = (event) => {
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

  render() {
    const {username, email, password, password_confirmation} = this.state
    return (
      <Dialog
        title="Registration"
        modal={false}
        open={this.props.registrationOpen}
        onRequestClose={this.props.registrationClose}
      >
        <form onSubmit={this.handleSubmit}>
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
    )
  }
}