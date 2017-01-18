import React, {Component} from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Search from 'material-ui/svg-icons/action/search';
import Dialog from 'material-ui/Dialog';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

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
    date_range: false,
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

    axios.get('https://herodotus-backend.herokuapp.com/searches', {
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

  handleDateInputStyle = (event) => {
    if (this.state.date_range === false){
      this.setState({date_range: true})
    }
    else {
      this.setState({date_range: false})
    }
  }

  render(){
    const { title, genre, keywords, date, start_date, end_date, location } = this.state;
    let buttonPrompt = null;
    let dateInput = null;
    if(this.state.date_range){
      buttonPrompt = "Search by Specific Date";
      dateInput =
        <div>
          <TextField hintText="eg. 1941" floatingLabelText="Movie Start Date" fullWidth={false}
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
            <input onChange={this.handleFormChange} type="text" name="start_date" value={start_date}/>
          </TextField>

          <TextField hintText="eg. 1945" floatingLabelText="Movie End Date" fullWidth={false}
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
            <input onChange={this.handleFormChange} type="text" name="end_date" value={end_date}/>
          </TextField>
        </div>
    } else {
      buttonPrompt = "Search by Date Range";
      dateInput =
        <div>
          <TextField hintText="eg. 1941" floatingLabelText="Setting Date (year)" fullWidth={false}
            floatingLabelFocusStyle={{color: "firebrick"}}
            underlineFocusStyle={{borderColor: "black"}}>
            <input onChange={this.handleFormChange} type="text" name="date" value={date}/>
          </TextField>

        </div>
    }

    return(
      <div>
        <div>
          <RaisedButton label="Search" icon={<Search/>} onTouchTap={this.handleOpen} />
          <Dialog
            title="Film Search Filter"
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >

            <form onSubmit={this.handleSubmit}>
              <TextField hintText="eg. Pearl Harbor" floatingLabelText="Title" fullWidth={false}
                floatingLabelFocusStyle={{color: "firebrick"}}
                underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleFormChange} type="text" name="title" value={title}/>
              </TextField>
              {/* <br/> */}
              <TextField hintText="eg. drama" floatingLabelText="Genre" fullWidth={false}
                floatingLabelFocusStyle={{color: "firebrick"}}
                underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleFormChange} type="text" name="genre" value={genre}/>
              </TextField>
              {/* <br/> */}
              <TextField hintText="eg. war love (includes all)" floatingLabelText="Keywords" fullWidth={false}
                floatingLabelFocusStyle={{color: "firebrick"}}
                underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleFormChange} type="text" name="keywords" value={keywords}/>
              </TextField>
              {/* <br/> */}
              <TextField hintText="eg. USA" floatingLabelText="Setting Location" fullWidth={false}
                floatingLabelFocusStyle={{color: "firebrick"}}
                underlineFocusStyle={{borderColor: "black"}}>
              <input onChange={this.handleFormChange} type="text" name="location" value={location}/>
              </TextField>
              {/* <br/> */}
              {dateInput}
              <div id="search-form-buttons">
               <RadioButtonGroup name="shipSpeed">
              <RadioButton
                onClick={this.handleEraChange}
                value="BCE"
                label="BCE"
                style={{marginBottom: 16}}
              />
              <RadioButton
                onClick={this.handleEraChange}
                value="CE"
                label="CE"
                style={{marginBottom: 16}}
              />
            </RadioButtonGroup>
          </div>

          <RaisedButton label="Submit" backgroundColor="black" labelColor="white" style={{float:"right", marginLeft:"10px"}} type="submit"/>
          <RaisedButton label={buttonPrompt} backgroundColor="firebrick" labelColor="white" style={{float:"right"}} onClick={this.handleDateInputStyle} />
          <br/>

            </form>
          </Dialog>
        </div>
      </div>
    );
  }
}
export default AdvancedSearchBox;
