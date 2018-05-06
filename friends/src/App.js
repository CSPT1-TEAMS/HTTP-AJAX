import React, { Component } from 'react';

import './App.css';
import FriendsList from "./FriendsList";

// import UpdateFriend from "./components/UpdateFriend.js";

import {Route} from 'react-router-dom';

  class App extends Component {
  render() {
    return (
    <div className="App">
    <FriendsList/>
   
      </div>
      ) 
  }
}

export default App;
