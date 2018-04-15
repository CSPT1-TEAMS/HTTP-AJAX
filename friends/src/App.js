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
   Updated 2018-04-13T09:37:31
   Version 0.1.1
   Factored out friendsServer code
   ------------------------------
   Updated 2018-04-14T23:36:38
   Version 0.2.2
   Working on stretch; created new NavBar, Routes, route-data;
   changed Route to Routes
   ------------------------------
 */

import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './components/navbar';
import Routes from './routes/routes';

const PORT = 5000;
const URL_BASE = `http://localhost:${PORT}`;

class App extends Component {

  state = {
    friends: [],
  }

  friendsServer = options => {
    axios(options)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.friendsServer({
      method: 'GET',
      url: `${URL_BASE}/friends`
    })
  }

  newFriendHandler = newFriend => {
    console.log('NEW FRIEND HANDLER INVOKED; newFriend: ', newFriend);
    this.friendsServer({
      method: 'POST',
      url: `${URL_BASE}/friends`,
      data: newFriend
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="Friends" style={{ width: '100%', border: 'thin solid black' }}>
          <NavBar />
          <Routes friends={this.state.friends} newFriend={this.newFriendHandler} />
        </div>
      </div>
    )
  }
}

export default App;
