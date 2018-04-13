import React, { Component } from 'react';
import axios from 'axios';

export default class FriendsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      Friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then((response) => console.log(response))
  }

  render() {
    return(
      <div>HELLO</div>
    );
  }

}