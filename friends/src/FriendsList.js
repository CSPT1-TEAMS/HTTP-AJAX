import React, { Component } from 'react'
import axios from 'axios'
import './Friends.css'
import AddFriend from './AddFriend'

export default class FriendsList extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
    }
  }

  componentDidMount(){
    this.fetchUsers()
  }

  fetchUsers = () => {
    axios.get('http://localhost:5000/friends')
         .then(response => {
           this.setState({ friends: response.data })
         })
         .catch(err => console.log(err))
  }

  buttonSubmit = (friend) => {
    axios.post('http://localhost:5000/friends', friend)
         .then( (response) => {
           this.setState({ friends: response.data, name: '', age: '', email: ''})
         })
  }
  render() {
    return (
      <div>
        <h1>Friends:</h1>
        <ul className='friends'>
          {this.state.friends.map( friend => {
             return (
               <li key={friend.id} className='friend'>
                 <p>Name: {friend.name}</p>
                 <p>Age: {friend.age}</p>
                 <p>Email: {friend.email}</p>
               </li>
             )
          })}
        </ul>
        <AddFriend buttonSubmit={this.buttonSubmit} />
      </div>
    )
  }
}
