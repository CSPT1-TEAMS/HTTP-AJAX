import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import FriendList from './Components/FriendList.js';
import AddFriendForm from './Components/AddFriendForm.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={FriendList} />
        <Route path="/addfriend" component={AddFriendForm} />
      </div>
    );
  }
}

export default App;
