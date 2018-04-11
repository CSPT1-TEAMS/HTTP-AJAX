import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from './Component/FriendsList';
import NewFriend from './Component/NewFriend';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div >
        <FriendsList />
        <NewFriend />
      </div>
    );
  }
}

export default App;
