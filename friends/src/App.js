import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
      friends: []
  }

  addFriend = () => {
    let value1 = document.getElementById("name").value;
    let value2 = document.getElementById("age").value;
    let value3 = document.getElementById("email").value;

    axios.post('http://localhost:5000/friends',
               {name: value1, age: value2, email: value3})
    .then(response => console.log(response))
    .catch(err => {console.log(err)})
  }

  updateFriend = (id, name, age, email) => {
    axios.put(`http://localhost:5000/friends/${id}`,
               {name: name, age: age,
                email: email})
    .then(response => console.log(response))
    .catch(err => {console.log(err)});
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {this.setState( {friends: response.data})})
    .catch(err => {console.log(err)});
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className="App">
          {this.state.friends.map((friend, index) => {
            return (
              <div key={index}>
                <form>
                  <input type="text" name="name" value={friend.name} />
                  <input type="text" name="age" value={friend.age} />
                  <input type="text" name="email" value={friend.email} />
                  <input type="submit" value="Update"
                         onClick= { () => this.updateFriend(friend.id, friend.name, friend.age, friend.email) } />
                </form>
              </div>)
          })}
        </div>
        <form>
          <input type="text" id="name" placeholder="Enter name.."/>
          <input type="text" id="age" placeholder="Enter age..."/>
          <input type="text" id="email" placeholder="Enter email..."/>
          <input type="submit" value="Add Friend" onClick={this.addFriend}/>
        </form>
      </div>
    );
  }
}

export default App;
