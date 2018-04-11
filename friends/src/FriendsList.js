import React from 'react';

const FriendsList = (props) => {
  console.log(props);
  return (
    <div>
      { props.friend.name }
    </div>
  )
}

export default FriendsList;