import React from 'react';

const FriendsList = (props) => (
  <div className="friend-list-entry media row center-align">
    <div className="media-left media-middle">
      <img className="friend-media-object circle"  src={props.friend.pic_url} alt={props.friend.name}/>
    </div>
    <div className="media-body row center-align">
      <div 
        className="friend-list-entry-title center-align" 
        onClick={() => console.log('name clicked')}
      >
        {props.friend.name}
      </div>
    </div>
  </div>
)

export default FriendsList;


/* <a href="#!" class="waves-effect waves-circle waves-light btn-floating secondary-content">
<i class="material-icons">add</i>
</a> */