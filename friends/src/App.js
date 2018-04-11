import React, { Component } from 'react';
import axios from 'axios';
import './App.css';




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
        {this.state.currentFriends.map(friend =>{
          return (<div>
            {
              friend.name
            }
          </div>)
        })}
      </div>
    );
  }
}

export default App;
