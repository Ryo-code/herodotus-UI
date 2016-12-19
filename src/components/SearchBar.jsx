import React, {Component} from 'react';
import axios from 'axios'

class SearchBar extends Component {




  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    handleChange = (event) => {
      this.setState({value: event.target.value});
    }

    handleQuerySumbit = (event) => {
      if (event.key === 'Enter'){
        let search = this.state.value
        // console.log("The query title is: " + search)

        axios.get(`http://0.0.0.0:3000/titles?name=${search}`)
          .then((response) => {
            console.log(response.data)
            //UPDATE MOVIE METHOD
            this.props.updateMoviesFromSearchResult(response.data)
          })
          .catch((error) => {
            console.log(error)
          })

        this.setState({value: ""});
      }
    }





  render() {

    return(
      <label>
        Search By title:
        <input type="text" name="query"
           value={this.state.value}
           onChange={this.handleChange}
           onKeyUp={this.handleQuerySumbit}
           />
      </label>
    );

  }
}

export default SearchBar;