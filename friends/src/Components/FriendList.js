import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Friend from './Friend.js';


class FriendList extends Component {
  state = {
    friends: [],
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => this.setState({ friends: response.data }))
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <div className="friend-list">
          {this.state.friends.map((friend, index) => {
            return <Friend friend={friend} key={index} />
          })}

        </div>
        <Link to="/addfriend"><button>Add New Friend</button></Link>
      </div>
    );
  }
}

export default FriendList;