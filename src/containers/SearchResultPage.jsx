import React, {Component} from 'react';
import FilmWall from './FilmWall.jsx';
import axios from 'axios'
import {Link} from 'react-router'

var query = window.location.search
var url = `http://0.0.0.0:3000/adv_searches/${query}`


class SearchResultPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {


    axios.get(url)
    .then((response) => {
      this.setState({ movies: response.data })
    })
    .catch((error) => {
      console.log(error)
    })


  }

  render() {
    return (

      <div>
        <h1>
          <Link to="/">Back to Home</Link>
        </h1>
        <FilmWall movies={this.state.movies} />
      </div>



    );
  }


}


export default SearchResultPage;