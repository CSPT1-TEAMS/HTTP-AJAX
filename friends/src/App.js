import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {

constructor(){
  super();
  this.state = {
    friends: [],   
  }
}

componentDidMount() {
  axios.get('http://localhost:5000/friends')
  .then(response => {this.setState( {friends: response.data})})
  .catch(err => {console.log(err)});
}




  render() {

    console.log(this.state);

    return (
    <div className="App">
      {this.state.friends.map(friend => {
        return (
          <div>
          {friend.name}
          </div>)
      })}


     
      
      </div>
    );
  }
}

export default App;
