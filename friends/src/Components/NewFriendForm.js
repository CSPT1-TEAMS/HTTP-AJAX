/**
   NewFriendForm.js
   ================
   Created 2018-04-12T08:10:43
   Version 0.0.1
   ------------------------------
   Updated 2018-04-12T12:36:19
   Version 0.0.2
   Form adds a new friend
   ------------------------------
 */

import React, { Component } from 'react';

class NewFriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'New Friend',
      age: 0,
      email: 'newfriend@lambda.com'
    }
  }

  changeHandler = e => {
    const { value, id } = e.target;
    const n = { [id]: value };
    this.setState( n );
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.newFriendHandler(this.state);
  }

  render() {
    return (
      <div className="new-friend-form" style={{ float: 'right', width: '48%', border: 'thin solid black' }}>
        <h1>New Friend Form</h1>
        <form
          style={{ display: 'block', width: '100%' }}
          onChange={ this.changeHandler }
          onSubmit={ this.submitHandler }
        >
          <p>
            <label style={{ display: 'inline', width: '25%' }}>Name:
              <input
                id="name"
                type="text"
                value={this.state.name}
                style={{ width: '75%' }} />
            </label>
          </p>
          <p>
            <label style={{ width: '25' }}>Age:
              <input id="age" type="text" value={this.state.age} style={{ width: '75%' }} />
            </label>
          </p>
          <p>
            <label style={{ width: '25%' }}>Email:
              <input id="email" type="text" value={this.state.email} style={{ width: '75%' }} />
            </label>
          </p>
          <p>
            <input id="submit" type="submit" />
          </p>
        </form>
      </div>
    )
  }
}

export default NewFriendForm;
