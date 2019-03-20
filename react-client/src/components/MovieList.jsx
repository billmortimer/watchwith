import React from 'react';
import MovieItem from './MovieItem.jsx';

const MovieList = (props) => (
  <div>
    { props.movies.map(movie => 
      <div className="movie-item">
      <MovieItem key={movie.id} movie={movie} friends={props.friends}/>
      </div>
    )}
  </div>
)

export default MovieList;

// You have { props.movies.length } movies.



