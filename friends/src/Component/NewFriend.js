import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewFriend extends Component {
  constructor(){
    super();
    this.state = {
      friends: [],
      newFriend: '',
    };
  }

  addFriend = (event) => {
    event.preventDefault();
    const friends = this.state.friends;
    const newFriend = this.state.newFriend;
    friends.push(newFriend);
    this.setState({
        friends: friends,
        newFriend: '' 
    });
  }

  handleTaskInput = (event) => {
    const newFriend = event.target.value;
    this.setState({ 
        newFriend: newFriend,
        name: name,
        age: age,
        email: email,
    });
  };

  componentDidMount() {
    axios.post('http://localhost:5000/friends')
      .then(response => {
        this.setState(() => ({ 
            name: '',
            age: '',
            email: '',
        }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  
  render() {
    return (
      <div>
        <Form onSubmit={this.addFriend} inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Name" className="mr-sm-2">Name</Label>
                <Input onChange={this.handleTaskInput} value={this.state.newFriend} type="text" name="text" id="Name" placeholder="Name here" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="Age" className="mr-sm-2">Age</Label>
                <Input onChange={this.handleTaskInput} value={this.state.newFriend} type="number" name="Age" id="Age" placeholder="Age here" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                <Input onChange={this.handleTaskInput} value={this.state.newFriend} type="email" name="email" id="exampleEmail" placeholder="Email here" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default NewFriend;