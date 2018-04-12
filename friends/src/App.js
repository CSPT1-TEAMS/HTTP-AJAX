import React, { Component } from 'react';
import reactstrap from 'reactstrap';
import axios from 'axios';
import './App.css';
import AddFriend from './AddFriend';
import FriendsList from './FriendsList';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currentFriends: []
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(response => {
      this.setState(()=> ({ currentFriends: response.data }));
    })
    .catch(error => {
      console.error('Server Error', error);
    })
  }
  
  render() {
    return (
      <div className="App">
        {this.state.currentFriends.map((friend,i) =>{
            return (
              <FriendsList key={i} friend={friend} /> //passes all of our state to FriendsList and gives access to props
            );
          })
        }
        <AddFriend />
      </div>
    )
  }
}

export default App;
