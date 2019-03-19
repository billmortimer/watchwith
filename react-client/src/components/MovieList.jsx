import React from 'react';
import MovieItem from './MovieItem.jsx';


const MovieList = (props) => (
  <div>
    { props.movies.map(movie => 
      <div>
      <MovieItem key={movie.id} movie={movie}/>
      </div>
    )}
  </div>
)

export default MovieList;

// You have { props.movies.length } movies.



