/**
   route-data
   ==========
   Created 2018-04-14T19:47:12
   Version 0.0.1
   ------------------------------
   Updated 2018-04-14T23:27:45
   Version 0.1.1
   Made components Components
   ------------------------------
 */

import FriendsList from '../components/friends-list';
import FriendsModify from '../components/friends-modify';
import FriendsDelete from '../components/friends-delete';

export default [
  {
    name: 'Friends Home',
    path: '/friends',
    Component: 'Friends',
    exact: true
  },
  {
    name: 'Friends List',
    path: '/friends/list',
    Component: FriendsList,
    exact: true
  },
  {
    name: 'Friends Modify',
    path: '/friends/list/modify',
    Component: FriendsModify,
    exact: false
  },
  {
    name: 'Friends Delete',
    path: '/friends/list/delete',
    Component: FriendsDelete,
    exact: false
  }
];
