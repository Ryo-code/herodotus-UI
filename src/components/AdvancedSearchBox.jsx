import React, {Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router'
// import {Link, browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
const style = {
  margin: 12,
  float: "right"
};
const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};
class AdvancedSearchBox extends Component {
  state = {
    title: '',
    genre: '',
    keywords: '',
    location: '',
    date: '',
    start_date: '',
    end_date: '',
    era: '',
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };

  clearForm = () => {
    this.setState({
      title: '',
      genre: '',
      keywords: '',
      location: '',
      date: '',
      start_date: '',
      end_date: '',
      open: false
    })
  }

  handleSubmit = (event) => {
    let {title, genre, keywords, date, start_date, end_date, era, location} = this.state;
    event.preventDefault();

    axios.get('http://0.0.0.0:3000/adv_searches', {
      params: {
          title: title,
          genre: genre,
          keywords: keywords,
          date: date,
          era: era,
          location: location,
          start_date: start_date,
          end_date: end_date,
        }
      })
      .then((response) => {
        this.props.updateToSearchResults(response.data)
        browserHistory.push('/results')
      })
      .catch((error) => {
        console.log(error)
      })
    this.clearForm()
  }
  handleEraChange = (event) => {
    this.setState({era: event.target.value})
  }
  handleFormChange = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }
  render(){
    const { title, genre, keywords, date, start_date, end_date, location } = this.state;

    return(
      <div>
        <div>
          <RaisedButton label="Film Search" onTouchTap={this.handleOpen} />
          <Dialog
            title="Advanced Film Search"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >

            <form onSubmit={this.handleSubmit}>
              <TextField hintText="Pearl Harbor" floatingLabelText="Title" fullWidth={true}>
                <input onChange={this.handleFormChange} type="text" name="title" value={title}/>
              </TextField>
              <br/>
              <TextField hintText="Drama" floatingLabelText="Genre" fullWidth={true}>
                <input onChange={this.handleFormChange} type="text" name="genre" value={genre}/>
              </TextField>
              <br/>
              <TextField hintText="Japan Kamikaze" floatingLabelText="Keywords" fullWidth={true}>
                <input onChange={this.handleFormChange} type="text" name="keywords" value={keywords}/>
              </TextField>
              <br/>
              <TextField hintText="USA" floatingLabelText="Set Location (Where did the movie take place?)" fullWidth={true}>
                <input onChange={this.handleFormChange} type="text" name="location" value={location}/>
              </TextField>
              <br/>
              <TextField hintText="1941" floatingLabelText="Set Date (When did the movie take place?)" fullWidth={true}>
                <input onChange={this.handleFormChange} type="text" name="date" value={date}/>
              </TextField>

               <TextField hintText="1941" floatingLabelText="Movie Start Date" fullWidth={false}>
                <input onChange={this.handleFormChange} type="text" name="start_date" value={start_date}/>
              </TextField>

               <TextField hintText="1943" floatingLabelText="Movie End Date" fullWidth={false}>
                <input onChange={this.handleFormChange} type="text" name="end_date" value={end_date}/>
              </TextField>

              <br/>

              <RaisedButton label="Search" primary={true} style={style} type="submit"/>

              <div id="submit-button">
               <RadioButtonGroup name="shipSpeed">
                  <RadioButton
                    onClick={this.handleEraChange}
                    value="BC"
                    label="BC"
                    style={styles.radioButton}
                  />
                  <RadioButton
                    onClick={this.handleEraChange}
                    value="AD"
                    label="AD"
                    style={styles.radioButton}
                  />
                </RadioButtonGroup>
              <br/>

              {/*<RaisedButton label="Search" primary={true} style={style} type="submit"/>*/}
              </div>
              <br/>

            </form>
          </Dialog>
        </div>
      </div>
    );
  }
}
export default AdvancedSearchBox;
