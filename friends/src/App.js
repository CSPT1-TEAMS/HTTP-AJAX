import React, { Component } from 'react';

import './App.css';
import FriendsList from "./components/FriendsList";

// import {Route} from 'react-router-dom';

  class App extends Component {
  render() {
    return (
    <div className="App">
    <FriendsList/>
    {/* <Route exact path="/" component={FriendsList}/>
    <Route path="/addFriend" component={AddFriend}/> */}
      </div>
      ) 
  }
}

export default App;
