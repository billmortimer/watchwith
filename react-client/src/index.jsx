import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
//import SearchBox from './components/Search.jsx';
import MovieList from './components/MovieList.jsx';
import fakeMovies from '../../fakeMovies.js';
import TMDB_API_KEY from '../../.env/tmdb_key.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      friends: []
    }
    this.fetchApi = this.fetchApi.bind(this);
    this.fetchMovieID = this.fetchMovieID.bind(this);
    this.fetchMoviesFromDB = this.fetchMoviesFromDB.bind(this);
    this.fetchFriendsFromDB = this.fetchFriendsFromDB.bind(this);
    this.getSearchResults= this.getSearchResults.bind(this);
  }

  getSearchResults(that) {
    jQuery(document).ready(function($){
      // Set up search of tmdb
      let options = {
        placeholder: 'Type a movie name',
        url: function(phrase) { 
          console.log(phrase);
          let queryStr = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${phrase}&include_adult=false`;
          return queryStr;
        },
        getValue: function(element) {
          return element.title + ' (' + element.release_date.slice(0,4) +')';
        },
        template: {
          type: "custom",
          method: function(value, item) {
            let customStr = `<img class="search-thumb" src="https://image.tmdb.org/t/p/w500${item.poster_path}" /> ${item.title} (${item.release_date.slice(0,4)})`
            return customStr;
          }
        },
        list: {
          onChooseEvent:  function() {
            let movieId = $("#autocomplete-tmdb").getSelectedItemData().id;
            console.log(movieId);
            console.log(that);
            that.fetchMovieID(movieId).bind(that);
          }
        },
        ajaxSettings: {
            dataType: "json"
        },
        cssClasses: "movieSearch",
        listLocation: "results",
        requestDelay: 500,
        theme: "round"
      };
    
      $("#autocomplete-tmdb").easyAutocomplete(options);
    
    });
   }

  componentDidMount() {
    //console.log('In componentDidMount');
    this.fetchMoviesFromDB();
    //this.fetchMovieID(157336);
    this.getSearchResults(this);
    //this.fetchMovieID(movieNum);   
  }

  render () {
    return (
    <div>
      <input ref="movieSearch" id="autocomplete-tmdb"/>
      <MovieList movies={this.state.movies}/>
    </div>)
  }
  // <SearchBox fetchMovieID={this.fetchMovieID.bind(this)}/>

  fetchFriendsFromDB() {
    // GET the friends from the DB and update the state
    axios({ method: 'get', url: '/api/friends'})
    .then(res => {
      this.setState({
        friends: res.data
      })
    })
    .catch(err => console.log(err));
  }

  fetchMoviesFromDB() {
    // GET the movies from the DB and update the state
    axios({ method: 'get', url: '/api/movies'})
    .then(res => {
      this.setState({
        movies: res.data
      })
    })
    .catch(err => console.log(err));
  }

  // the api request function
  fetchApi(url) {

    fetch(url).then((res) => res.json())
    .then((data) => {
      console.log('Fetching movie ID from TMDB')
      // Create a new movie object for the movie that was fetched
      let newMovieObj = {
          "id": data.id,
          "imdb_id": data.imdb_id,
          "overview": data.overview,
          "poster_path": data.poster_path,
          "release_date": data.release_date,
          "tagline": data.tagline,
          "title": data.title
      };
      console.log(newMovieObj);
      // POST the movie to the DB by sending a request to the /api/movies endpoint
      axios({ method: 'post', url: '/api/movies', data: newMovieObj})
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    })
    .catch((err) => console.log('Movie not found!'));
  } // end function

  fetchMovieID(movieID) {
    console.log('Fetching movieId ' + movieID);
    let url = `https://api.themoviedb.org/3/movie/${movieID}?&api_key=${TMDB_API_KEY}`
    this.fetchApi(url)
  } // end function

}




ReactDOM.render(<App />, document.getElementById('app'));