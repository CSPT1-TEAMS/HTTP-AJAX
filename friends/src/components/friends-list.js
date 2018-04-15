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
   Updated 2018-04-15T08:40:35
   Version 0.1.1
   Adjusted styling to place form appropriately
   ------------------------------
   Updated 2018-04-15T08:47:44
   Version 0.1.2
   Replaced styled wrapping div with unstyled
   ------------------------------
 */

import React from 'react';
import Friend from './friend';

const listFriends = friends => {
  return friends.map(f => <Friend friend={f} key={f.id} />)
}

const FriendsList = (props) => {
  return (
    <div className="friends-list-component">
    <h1>{props.name}</h1>
      <article className="friends-list"
               style={{ display: 'block', float: 'left', padding: '10px', margin: '10px'}}
      >
        <header className="friends-list-header">
          <h1 style={{backgroundColor: 'yellow'}}>
            Friends List
          </h1>
        </header>
        {listFriends(props.friends)}
      </article>
    </div>
  );
};

export default FriendsList;
