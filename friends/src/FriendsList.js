import React from 'react';


const FriendsList = (props) => {
  return (
    <div>
      <div>Friends name: {props.friend.name}</div>
      <div>Friends age: {props.friend.age}</div>
      <div>Friends email: {props.friend.email}</div>
    </div>
  );
}

export default FriendsList;

