import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import {Route} from 'react-router-dom';

  class App extends Component {
  render() {
    return (
    <div className="App">
    <Route exact path="/" component={FriendsList}/>
    <Route path="/addFriend" component={AddFriend}/>
      </div>
      ) 
  }
}

export default App;
