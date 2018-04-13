/**
   App.js
   ======
   Created 2018-04-12T00:05:03
   Version 0.0.1
   ------------------------------
   Updated 2018-04-12T08:04:14
   Version 0.0.2
   Changed ListOfFriends to FriendsList
   ------------------------------
   Updated 2018-04-12T12:35:12
   Version 0.0.3
   Added AddNewFriend handler
   ------------------------------
   Updated 2018-04-12T17:02:19
   Version 0.0.4
   Added nextId to state and new friend data
   ------------------------------
   Updated 2018-04-12T17:12:48
   Version 0.1.0
   Added POST
   ------------------------------
 */

import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import FriendsList from './Components/FriendsList';
import NewFriendForm from './Components/NewFriendForm';

const PORT = 5000;
const URL_BASE = `http://localhost:${PORT}`;

class App extends Component {

  state = {
    friends: [],
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      url: `${URL_BASE}/friends`
    };
    axios(options)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.error(err));
  }

  newFriendHandler = newFriend => {
    const options = {
      method: 'POST',
      url: `${URL_BASE}/friends`,
      data: newFriend
    }
    axios(options)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="friends" style={{ width: '800px', border: 'thin solid black' }}>
          <FriendsList friends={this.state.friends}  />
          <NewFriendForm newFriendHandler={this.newFriendHandler} />
        </div>
      </div>
    );
  }
}

export default App;
