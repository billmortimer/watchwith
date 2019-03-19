import React from 'react';
import FriendsList from './FriendsList.jsx';

const MovieItem = (props) => (
  <div>
    <div className="video-list-entry media row">
      <div className="media-left media-middle col s3">
        <img className="media-object" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title}/>
      </div>
      <div className="media-body col s4">
        <div 
          className="video-list-entry-title" 
          onClick={() => console.log('title clicked')}
        >
          { props.movie.title } ({props.movie.release_date.slice(0,4)})
        </div>
      </div>
      <div className="video-list-entry-detail col s7">{ props.movie.overview }</div>
    </div>
    <div className="friends-list-entry media">
      {props.movie.friends.map((friend) => {
        console.log(friend);
        return (
          <div className="row">
            <FriendsList friend={friend}/>
          </div>
        )
      })}
    </div>
  </div>
)

// key={friend.email}

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

{/* <a href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content">
<i class="material-icons">add</i>
</a> */}