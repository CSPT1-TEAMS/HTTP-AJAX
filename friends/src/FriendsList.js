import React, { Component } from "react";
import axios from "axios";
import './Friends.css'


class FriendsList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    this.fetchUsers()
  }
fetchUsers =() => {
  axios
    .get("http://localhost:5000/friends")
    .then(response => {
      this.setState({ friends: response.data });
    })
    .catch(error => {
      console.error("error", error);
    });
}
 nameChange =(e) => { this.setState({name: e.target.value})}
 ageChange =(e) => { this.setState({age: e.target.value})}
 emailChange =(e) => { this.setState({email: e.target.value})}
 buttonSubmit =() => {
   const{ name, age, email} = this.state
   axios.post('http://localhost:5000/friends', {
     name,
     age,
     email
   })
   .then(this.fetchUsers) 
   .then( ()=> {this.setState({ name: '', age:'', emai: ''})
  })
  {/* or 
.then((response) => {
this.setState({friends: response.data, name:'', age: '', email:''})*/}
// })}
//   }
  }
  
  render() {
    return ( <div>
        <h1>Friends</h1>
        <ul className="friends">
          {this.state.friends.map(friend => {
            return (<li key={friend.id} className="friend">
                <p> Name: {friend.name}</p>
                <p> Age: {friend.age}</p>
                <p> Email: {friend.email}</p>
              </li>
          )
          })}
        </ul>
        <h3> Add Friend </h3>
        <input type="text" placeholder="Name"  onChange={this.nameChange}  value={this.state.name}/>
        <input type="number" placeholder="Age"  onChange={this.ageChange} value={this.state.age}/>
        <input type="text" placeholder="Email" onChange={this.emailChange}  value={this.state.email}/>
        <button onClick={this.buttonSubmit}>Submit</button> 
      </div>
    )
  }
}

export default FriendsList;
