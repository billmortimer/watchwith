import React from 'react';

const FriendsChips = (props) => (
  <div>
    {props.friends.map((friend) => {
      console.log(friend);
    <img className="friend-media-object circle" className={props.movie.id} src={friend.pic_url} alt={friend.name}/>
    })}
  </div>
)

export default FriendsChips;


/* <a href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content">
<i class="material-icons">add</i>
</a> */

// <div className="friend-list-entry media row center-align">
// <div className="media-left media-middle">
//   <img className="friend-media-object circle"  src={props.friend.pic_url} alt={props.friend.name}/>
// </div>
// <div className="media-body row center-align">
//   <div 
//     className="friend-list-entry-title center-align" 
//     onClick={() => console.log('name clicked')}
//   >
//     {props.friend.name}
//   </div>
// </div>
// </div>