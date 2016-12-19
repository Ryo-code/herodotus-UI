import React, {Component} from 'react';
import axios from 'axios'
import _ from 'lodash'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.makeRequest = _.debounce(this.makeRequest, 0)
  }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    makeRequest = (search = this.state.value) => {
      axios.get('http://0.0.0.0:3001/titles?name=' +search)
        .then((response) => {
          // console.log(response.data)
          //UPDATE MOVIE METHOD
          this.props.updateMoviesFromSearchResult(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }

    handleChange = (event) => {
      this.setState({value: event.target.value}, () =>{
        console.log(this.state.value)
        this.makeRequest();
      });


    }

    handleQuerySumbit = (event) => {
      if (event.key === 'Enter'){
        let search = this.state.value
        console.log("The query title is: " + search)

        this.makeRequest(search)

        this.setState({value: ""});
      }
    }


  render() {

    return(
      <div>
        <label>
          Search By title:
          <input type="text" name="query"
             value={this.state.value}
             onChange={this.handleChange}
             onKeyUp={this.handleQuerySumbit}
             />
        </label>
        <span>Advanced Search</span>
      </div>
    );

  }
}

export default SearchBar;