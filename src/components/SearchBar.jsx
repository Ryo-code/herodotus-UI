import React, {Component} from 'react';

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

    handleSumbit = (event) => {
      event.preventDefault();
      //MAKE AXIOS REQUEST TO THE BACKEND API BASED ON SEARCH
      // GET THAT RESPONSE TO UPDATE THE LIST OF MOVIES?
      this.setState({value: ''});
    }





  render() {

    return(

      <form onSubmit={this.handleSubmit}>
        <label>
          Search By title:
          <input type="text" name="query" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Search!" />
      </form>

    );

  }
}

export default SearchBar;