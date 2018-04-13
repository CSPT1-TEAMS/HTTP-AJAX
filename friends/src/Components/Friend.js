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
 */

import React from 'react';

const Friend = (props) => {

  const { name, age, email, id } = props.friend;

  return (
    <div className="friend" key={id} style={{ width: '300px', border: 'thick solid black' }} >
      <div className="name" >{name}</div>
      <div className="age" >{age}</div>
      <div className="email" style={{ paddingBottom: '30px' }}>{email}</div>
    </div>
  )
}

export default Friend;
