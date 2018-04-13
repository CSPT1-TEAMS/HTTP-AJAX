import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import FriendsList from './Component/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      newFriend: {
        name: '',
        age: 0,
        email: ''
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data);
        this.setState({friends: response.data}); 
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleAddFriendInput = e => {
    let newFriendInfo = { [e.target.name]: e.target.value };
    this.setState({ newFriend: {...this.state.newFriend, ...newFriendInfo} })
  }

  handleSubmitAddFriend = e => {
    axios.post('http://localhost:5000/friends', this.state.newFriend)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={ () => <FriendsList {...this.state}/>}/>
          <br />
          Add a friend!<br />
          Name: 
          <input
            type="text"
            name="name"
            onChange={this.handleAddFriendInput}
          /><br />
          Age:
          <input
            type="number"
            name="age"
            onChange={this.handleAddFriendInput}
          /><br />
          Email: 
          <input
            type="email"
            name="email"
            onChange={this.handleAddFriendInput}
          /><br />
          <button onClick={this.handleSubmitAddFriend}>Add</button>
        </div>
      </Router>
    );
  }
}

export default App;
