import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props) => (
  <div>
    { props.movies.map(movie => <MovieItem key={movie.id} movie={movie}/>)}
  </div>
)

export default MovieList;

// You have { props.movies.length } movies.