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
 */

import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import FriendsList from './Components/FriendsList';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="List">
          <FriendsList friends={this.state.friends} />
        </div>
      </div>
    );
  }
}

export default App;
