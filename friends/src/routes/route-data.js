/**
   route-data
   ==========
   Created 2018-04-14T19:47:12
   Version 0.0.1
   ------------------------------
 */

export default [
  {
    name: 'Friends Home',
    path: '/friends',
    component: "Friends",
    exact: true
  },
  {
    name: 'Friends List',
    path: '/friends/list',
    component: "FriendsList",
    exact: true
  },
  {
    name: 'Friends Modify',
    path: '/friends/list/modify',
    component: 'FriendsModify',
    exact: false
  },
  {
    name: 'Friends Delete',
    path: '/friends/list/delete',
    component: 'FriendsDelete',
    exact: false
  }
];
