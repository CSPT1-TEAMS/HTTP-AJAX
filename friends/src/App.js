import React, { Component } from 'react';

import './App.css';
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend.js";
import UpdateFriend from "./components/UpdateFriend.js";

import {Route} from 'react-router-dom';

  class App extends Component {
  render() {
    return (
    <div className="App">
    {/* <FriendsList/> */}
    <Route exact path="/" component={FriendsList}/>
    <Route path="/addFriend" component={AddFriend}/>
    <Route path="/updateFriend/:id" component={UpdateFriend}/>
    {/* <Route path="/deleteFriend" component={}/> */}
      </div>
      ) 
  }
}

export default App;
