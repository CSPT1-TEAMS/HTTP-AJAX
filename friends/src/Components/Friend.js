import React from 'react';


const Friend = ({ friend }) => {
  const { name, age, email } = friend;
  return (
    <div className="friend">
      <p>{name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>      
    </div>
  );
}

export default Friend;