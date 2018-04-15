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
import FriendsListWithForm from '../components/friends-list-with-form';
import FriendsModify from '../components/friends-modify';
import FriendsDelete from '../components/friends-delete';

export default [
  {
    name: 'Friends Home',
    path: '/friends',
    Component: 'FriendsHome',
    exact: true
  },
  {
    name: 'List Friends',
    path: '/friends/list',
    Component: FriendsList,
    exact: true
  },
  {
    name: 'New Friends',
    path: '/friends/list/new',
    Component: FriendsListWithForm,
    exact: true
  },
  {
    name: 'Modify Friends',
    path: '/friends/list/modify',
    Component: FriendsModify,
    exact: false
  },
  {
    name: 'Delete Friends',
    path: '/friends/list/delete',
    Component: FriendsDelete,
    exact: false
  }
];
