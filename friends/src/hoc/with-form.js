/**
   with-form.js
   ============
   Created 2018-04-15T08:59:08
   Version 0.0.1
   ------------------------------
 */

import React from 'react';

import FriendForm from '../components/friend-form';

const withForm = props => { return (WrappedList => (
  <div className="wrapped-list">
    <WrappedList friends={props.friends} name={props.name} />
    <FriendForm newFriend={props.newFriend} />
  </div>
))};

export default withForm;
