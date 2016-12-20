import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router'

class AdvancedSearchBox extends Component {
  state = {
    title: '',
    genre: '',
    keywords: '',
    date: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);

    let {title, genre, keywords, date} = this.state;


    axios.get('/results').then((response) =>{
      console.log(response)
    })

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



  render(){
    const { title, genre, keywords, date } = this.state;
    return(
      <form action="/results" method="get">
        <label>
          Advanced Search
        </label>

        <label>
          Title:
        </label>
          <input onChange={this.handleFormChange} type="text" name="title" value={title}/>
        <label>
          Genre:
        </label>
          <input onChange={this.handleFormChange} type="text" name="genre" value={genre}/>
        <label>
          Keyword:
        </label>
          <input onChange={this.handleFormChange} type="text" name="keywords" value={keywords}/>
        <label>
         Date Released:
        </label>
          <input onChange={this.handleFormChange} type="text" name="date" value={date}/>

            <input type="submit" value="Search" />

      </form>
    );

  }

}

export default AdvancedSearchBox;
// On form submit