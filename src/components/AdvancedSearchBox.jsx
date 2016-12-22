import React, {Component} from 'react';
import axios from 'axios';

import {Link} from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

const style = {
  margin: 12,
  float: "right"
};

class AdvancedSearchBox extends Component {
  state = {
    title: '',
    genre: '',
    keywords: '',
    date: '',
    open: false
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);

    // let {title, genre, keywords, date} = this.state;

    console.log(123 ,this.state)
    axios.get(`${this.props.query}`)
      .then((response) => {
        this.setState({ movies: response.data })
      })
      .catch((error) => {
        console.log(error)
      })

    // axios.get('/results').then((response) =>{
    //   console.log(response)
    // })

    // axios.get(`http://0.0.0.0:3000/adv_searches/?title=${title}&genre=${genre}&keywords=${keywords}&date=${date}`)
    // .then((response) => {
    //   this.props.updateMoviesFromSearchResult(response.data)
    //   // console.log(response.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })



// PLZ DO NOT DELETE
    // axios.post(`/login`, {
    //   body: {
    //     username:
    //     password:
    //   }
    // }).then(data => localStorage.token = data.token)


  }

  handleFormChange = (event) => {
    const {value, name} = event.target;
    // const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  // const style = {
  // margin: 12,
  // };

  render(){
    const { title, genre, keywords, date } = this.state;

    // const actions = [
    //   <FlatButton
    //     label="Cancel"
    //     primary={true}
    //     onTouchTap={this.handleClose}
    //   />,
    //   <FlatButton
    //     label="Submit"
    //     primary={true}
    //     keyboardFocused={true}
    //     onTouchTap={this.handleClose}
    //   />,
    // ];

    return(

      <div>

        <div>
          <RaisedButton label="Film Search" onTouchTap={this.handleOpen} />
          <Dialog
            title="Advanced Film Search"
            // actions={actions}
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

              <TextField hintText="1941" floatingLabelText="Set Date" fullWidth={true}>
                <input onChange={this.handleFormChange} type="text" name="date" value={date}/>
              </TextField>

              <br/>

              <RaisedButton label="Search" primary={true} style={style} type="submit"/>

            </form>

          </Dialog>
        </div>

      </div>


    );

  }

}

export default AdvancedSearchBox;








