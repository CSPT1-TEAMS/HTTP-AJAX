/**
   FriendsList.js
   ================
   Created 2018-04-11T22:46:14
   Version 0.0.1
   ------------------------------
   Updated 2018-04-12T07:54:25
   Version 0.0.2
   Changed name to FriendsList.js
   ------------------------------
 */

import React from 'react';
import Friend from './Friend';

const listFriends = friends => {
  return friends.map((f, i) => <Friend friend={f} />)
}

const FriendsList = (props) => {

  return (
    <div className="friends-list" style={{ float: 'left', width: '48%', border: 'thin solid black' }} >
      <h1>Friends List</h1>
      {listFriends(props.friends)}
    </div>
  )
}

export default FriendsList;
