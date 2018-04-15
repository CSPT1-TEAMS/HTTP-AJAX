/**
   Friend.js
   =========
   Created 2018-04-11T23:22:09
   Version 0.0.1
   ------------------------------
   Updated 2018-04-12T08:04:52
   Version 0.0.2
   Added width to enclosing div
   ------------------------------
   Updated 2018-04-12T17:15:01
   Version 0.1.0
   ------------------------------
   Updated 2018-04-14T22:08:23
   Version 0.1.1
   Refactoring for stretch
   ------------------------------
 */

import React from 'react';

const friendStyles = {
  width: '250px',
  border: 'solid black',
  backgroundColor: '#ccc',
  margin: '0 0 -3px -3px',
}

const Friend = (props) => {

  const { name, age, email, id } = props.friend;

  return (
    <div className="friend" key={id} style={friendStyles} >
      <p className="name" style={{ marginTop: '10px' }} >{name}</p>
      <p className="age" >{age}</p>
      <p className="email" style={{ marginBottom: '10px' }}>{email}</p>
    </div>
  )
}

export default Friend;
