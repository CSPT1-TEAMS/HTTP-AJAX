import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => this.setState({
        friends: response.data
      }))
      .catch((error) => console.log(error));
  }

  render() {

    return(
      <div>
        <h1>Friends:</h1>
        <ul>
          {this.state.friends.map((friend, i) => {
            return (
              <li key={friend.id}>
                <p>Name: {friend.name}</p>
                <p>Age: {friend.age}</p>
                <p>Email: {friend.email}</p>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }

}