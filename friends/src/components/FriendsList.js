import React, { Component } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import AddFriend from "./AddFriend.js";
import Friend from "./Friend.js";

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("error", error);
      });
  }

 
  
  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <Link to={`/updateFriend/${friend.id}`}>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
             <Friend key={friend.id} friend={friend}/>
            );
          })}
        </ul>
        </Link>
        {/* <AddFriend />  */}
        <Link to="/addFriend"><button>NewFriend</button></Link>
      </div>
    );
  }
}

export default FriendsList;
