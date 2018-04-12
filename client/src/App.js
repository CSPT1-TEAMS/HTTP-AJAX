import React, { Component } from 'react';
import {Link,Route,Switch} from 'react-router-dom';
import './App.css';
import axios from 'axios';

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
	<div><Link to={`/friends/${friend.id}`}>
	  <div>Name: {friend.name}</div>
	  <div>Email: {friend.email}</div>
	  <div>Age: {friend.age}</div>
    </Link>
	</div>
      ))}
    </div>
  )
}

class FriendItem extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      friend :{}
    }
  }
 componentDidMount() {
   console.log('props',this.props)
   axios.get('http://localhost:5000/friends/' + this.props.match.params.id)
  .then(result => {
    console.log('result',result);
    this.setState({friend: result.data})
  })
 }

  render(){
  return (

    <div>
      <div> Name : {this.state.friend.name}</div>
      <div> Email : {this.state.friend.email} </div>
      <div> Age : {this.state.friend.age} </div>
      </div>
    )
  }
}

class AddFriendForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  handleSubmit = e => {
    axios.post('http://localhost:5000/friends', {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    })
  }

  handleChangeName = e => {
    const name = e.target.value
    this.setState({ name })
  }

  handleChangeAge = e => {
    const age = e.target.value
    this.setState({ age })
  }

  handleChangeEmail = e => {
    const email = e.target.value
    this.setState({ email })
  }

  render() {
    const { name, age, email } = this.state
    return (
      <div>
	<form onSubmit={this.handleSubmit} id="addFriend">
	  <input onChange={this.handleChangeName} value={name} type="text" placeholder="Name"/>
	  <input onChange={this.handleChangeAge} value={age} type="text" placeholder="Age"/>
	  <input onChange={this.handleChangeEmail} value={email} type="text" placeholder="Email"/>
	</form>
	<button type="submit" form="addFriend">Submit</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(response => this.setState({ friends: response.data }))
  }

  render() {
    return (
      <div className="App">
    <Link to ='/' component = {FriendsList}>Home</Link> 
	<AddFriendForm/>

  <Switch>
  <Route path="/friends/:id" component = {FriendItem}/>
	<Route path = "/" render = {props => (
    <FriendsList friends = {this.state.friends}/>
  )}/>

  </Switch>
      </div>
    );
  }
}

export default App;
