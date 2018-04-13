import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
      friends: [],
      name: "",
      age: "",
      email: ""
  }

  addFriend = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends',
               {name: this.state.name, age: this.state.age, email: this.state.email})
         .then(response => {
            this.setState( {friends: response.data, name: "", age: "", email: ""});
            console.log(response);
         })
         .catch(err => {console.log(err)})
  }

  handleChange = (event, id) => {
    let elementValue = event.target.value;
    let elementName = event.target.name;
    const friends = this.state.friends;
    friends[id][elementName] = elementValue;
    this.setState({ friends, })
  }

  changeInput = event => {
    let elementValue = event.target.value;
    let elementName = event.target.name;
    this.setState({ [elementName]: elementValue });
  }

  updateFriend = (event, id, index) => {
    console.log(event.target);
    event.preventDefault();
    axios.put(`http://localhost:5000/friends/${id}`,
               {name: this.state.friends[index].name, age: this.state.friends[index].age,
                email: this.state.friends[index].email})
    .then(response => {
      this.setState( {friends: response.data});
      console.log(response);
    })
    .catch(err => {console.log(err)});
  }

  deleteFriend = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(response => {this.setState( {friends: response.data})})
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
                  <input type="text" name="name" value={this.state.friends[index].name}
                         onChange={(e) => this.handleChange(e, index)} />
                  <input type="text" name="age" value={this.state.friends[index].age}
                         onChange={(e) => this.handleChange(e, index)} />
                  <input type="text" name="email" value={this.state.friends[index].email}
                         onChange={(e) => this.handleChange(e, index)} />
                  <input type="submit" value="Update"
                         onClick={(e) => this.updateFriend(e, friend.id, index)} />
                  <input type="submit" value="Delete"
                         onClick={(e) => this.deleteFriend(e, friend.id)} />
                </form>
              </div>)
          })}
        </div>
        <form>
          <input type="text" value={this.state.name} onChange={ this.changeInput }
                 id="name" name="name" placeholder="Enter name.."/>
          <input type="text" value={this.state.age} onChange={ this.changeInput }
                 id="age" name="age" placeholder="Enter age..."/>
          <input type="text" value={this.state.email} onChange={ this.changeInput }
                 id="email" name="email" placeholder="Enter email..."/>
          <input type="submit" value="Add Friend" onClick={this.addFriend}/>
        </form>
      </div>
    );
  }
}

export default App;
