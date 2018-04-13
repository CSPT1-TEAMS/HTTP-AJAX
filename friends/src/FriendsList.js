import React from 'react';
import AddFriendCard from './AddFriendCard';

const FriendsList = (props) => {
  return (
    <div className="Card-container">
{/* ☞ 88e5661d-634b-4514-b9d4-212ec9a277f4 */}
      <AddFriendCard {...props.friend}/> 
    </div>
  );
}

export default FriendsList;

