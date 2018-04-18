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
//delete handler would go somewhere here?
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

 handleDelete = (event, id) => {
   event.preventDefault();
   let friendsOriginal = this.state.friends;
   console.log(id);
  axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      this.setState(() => ({friends: friendsOriginal.filter(friend => friend.id !== id )  }));
    })
    .catch(error => {
      console.error("error", error);
    });

 }
  
  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
          <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return <div>
                <Friend key={friend.id} friend={friend} handleDelete={this.handleDelete} />
                <Link to={`/updateFriend/${friend.id}`}>
                  Update
                </Link>
                <button onClick={(e) => this.handleDelete(e, friend.id)}>X</button>
              </div>;
          })}
        </ul>
       
        {/* <AddFriend />  */}
        <Link to="/addFriend"><button>NewFriend</button></Link>
      </div>
    );
  }
}

export default FriendsList;
