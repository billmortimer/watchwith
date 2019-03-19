import React from 'react';

const FriendsList = (props) => (
  <div className="video-list-entry media row">
    <div className="media-left media-middle col s4">
      <img className="media-object" src="https://m.media-amazon.com/images/M/MV5BMTUzMzUzMDg5MV5BMl5BanBnXkFtZTcwMDA5NDMwNA@@._V1_UY317_CR4,0,214,317_AL_.jpg" alt=""/>
    </div>
    <div className="media-body col s8">
      <div 
        className="video-list-entry-title" 
        onClick={() => console.log('name clicked')}
      >
        Tyler Durden
      </div>
    </div>
  </div>
)

//<div className="video-list-entry-detail col s7">{ props.movie.overview }</div>
// {props.friend.pic_url}
// {props.friend.name}
// { props.friend.name }

export default FriendsList;


{/* <a href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content">
<i class="material-icons">add</i>
</a> */}