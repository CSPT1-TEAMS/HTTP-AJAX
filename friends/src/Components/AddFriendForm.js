import React, { Component } from 'react';
import axios from 'axios';



class AddFriendForm extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  resetState = () => {
    this.setState( {
      name: '',
      age: '',
      email: '',
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', this.state)
      .then((response) => {
        console.log(response);
        window.location = '/';
      })
      .then(() => this.resetState())
      .catch((error) => console.log(error))    
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="friend-form">
        <input
          className="form-input"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}/>
        <input
          className="form-input"        
          name="age"
          placeholder="Age"
          value={this.state.age}
          onChange={this.handleChange}/>
        <input
          className="form-input"        
          name="email"
          placeholder="Email"
          value={this.state.value}
          onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default AddFriendForm;