import React from 'react';

const MovieItem = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title}/>
    </div>
    <div className="media-body">
      <div 
        className="video-list-entry-title" 
        onClick={() => console.log('title clicked')}
      >
        { props.movie.title } ({props.movie.release_date.slice(0,4)})
      </div>
    </div>
    <div className="video-list-entry-detail">{ props.movie.overview }</div>
  </div>
)

export default MovieItem;

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