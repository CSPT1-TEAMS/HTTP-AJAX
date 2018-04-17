import React, { Component } from 'react';
import axios from 'axios';

class AddFriend extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        name: '',
        age: '',
        email: ''
      }
    }
  
    handleFormSubmit = e => {
      e.preventDefault();
      axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
    }
  
    handleFormName = e => {
      const name = e.target.value;
      this.setState ({name});
    }
  
    handleFormAge = e => {
      const age = e.target.value;
      this.setState ({age})
    }
  
    handleFormEmail = e => {
      const email = e.target.value;
      this.setState ({email})
    }
  
    // we can use handle name, email, and age
  
    render() {
      const {name, age, email } = this.state;
  
      return(
        <div>
          <div>
          <form id="adding" onSubmit={this.handleFormSubmit}>
            <input type="text" value={name} onChange={this.handleFormName} placeHolder="Name"/>
            <input type="text" value={age} onChange={this.handleFormAge} placeHolder="Age"/>
            <input type="text" value={email} onChange={this.handleFormEmail} placeHolder="Email"/>
          </form>
          </div>
          <div className="btn-NavButton"><button type="submit" form="adding">SEND DATA!</button></div>
        
        </div>

  
        // render form here, get it passed in event function to setState, also, add button 'Submit'
      )
    }
  }

  export default AddFriend;