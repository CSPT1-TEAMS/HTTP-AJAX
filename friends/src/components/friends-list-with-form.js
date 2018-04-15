/**
   friends-list-with-form.js
   =========================
   Created 2018-04-15T09:15:57
   Version 0.0.1
   ------------------------------
 */

import withForm from '../hoc/with-form';
import FriendsList from './friends-list';

const FriendsListWithForm = (props) => (
  (withForm(props))(FriendsList)
);

export default FriendsListWithForm;
