import React from 'react';
import FriendsList from './FriendsList.jsx';

const MovieItem = (props) => (
  <div>
    <div className="video-list-entry media row">
      <div className="media-left media-middle col s3">
        <img className="media-object" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title}/>
      </div>
      <div className="media-body col s9">
        <div 
          className="video-list-entry-title" 
          onClick={() => console.log('title clicked')}
        >
        <a href={`https://www.imdb.com/title/${props.movie.imdb_id}`} target="_blank">
          { props.movie.title } ({props.movie.release_date.slice(0,4)})
        </a>
        </div>
      </div>
      <div className="video-list-entry-detail col s9"><br/>{ props.movie.overview }</div>
    </div>
    <div className="friends-list-entry media  valign-wrapper">
      <h4> Watch with:</h4>
      {props.movie.friends.map((friend) => {
        //console.log(friend);
        return (
          <FriendsList friend={friend}/>
        )
      })}
    </div>
  </div>
)

// key={friend.email}
//<div className="video-list-entry-detail col s1"><i class="material-icons">delete</i></div>

export default MovieItem;

// { props.movies.map(movie => {
//   movie.friends.map(friend => {
//     <div>
//       <FriendsList key={friend.email} friend={friend}/>
//     </div>
//   })
// })}

// var VideoListEntry = ({video, handleVideoListEntryTitleClick}) => (
//   <div className="video-list-entry media">
//     <div className="media-left media-middle">
//       <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
//     </div>
//     <div className="media-body">
//       <div 
//         className="video-list-entry-title"
//         onClick={() => handleVideoListEntryTitleClick(video)}
//       >
//         {video.snippet.title}
//       </div>
//       <div className="video-list-entry-detail">{video.snippet.description}</div>
//     </div>
//   </div>
// );

/* <a href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content">
<i class="material-icons">add</i>
</a> */