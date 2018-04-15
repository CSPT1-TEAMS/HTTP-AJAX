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
   Updated 2018-04-12T14:35:08
   Version 0.0.3
   Added key to Friend Component
   ------------------------------
   Updated 2018-04-12T17:14:07
   Version 0.1.0
   ------------------------------
 */

import React from 'react';
import Friend from './friend';

const listFriends = friends => {
  return friends.map(f => <Friend friend={f} key={f.id} />)
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
