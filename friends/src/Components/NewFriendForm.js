/**
   NewFriendForm.js
   ================
   Created 2018-04-12T08:10:43
   Version 0.0.1
   ------------------------------
 */

import React, { Component } from 'react';

class NewFriendForm extends Component {

  state = {
    newFriend: {
      name: 'New Friend',
      age: 0,
      email: 'newfriend@lambda.com'
    },
    new: ''
  }

  componentDidMount() {
    console.log('PROPS', this.props);
  }

  render() {
    return (
      <div className="new-friend-form" style={{ float: 'right', width: '48%', border: 'thin solid black' }}>
        <h1>New Friend Form</h1>
        <form style={{ display: 'block', width: '100%' }}>
          <p>
            <label style={{ display: 'inline', width: '25%' }}>Name:
              <input type="text" value={this.state.name} style={{ width: '75%' }} />
            </label>
          </p>
          <p>
            <label style={{ width: '25' }}>Age:
              <input type="text" value={this.state.age} style={{ width: '75%' }} />
            </label>
          </p>
          <p>
            <label style={{ width: '25%' }}>Email:
              <input type="text" value={this.state.email} style={{ width: '75%' }} />
            </label>
          </p>
        </form>
      </div>
    )
  }
}

export default NewFriendForm;
