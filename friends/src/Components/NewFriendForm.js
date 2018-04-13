/**
   NewFriendForm.js
   ================
   Created 2018-04-12T08:10:43
   Version 0.0.1
   ------------------------------
   Updated 2018-04-12T12:36:19
   Version 0.0.3
   Form adds a new friend; added focusHandler
   ------------------------------
   Updated 2018-04-12T17:01:38
   Version 0.0.4
   Submit handler works
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
    const { value, name } = e.target;
    const _new = { [name]: value };
    this.setState( _new );
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.newFriendHandler(this.state);
  }

  focusHandler = e => this.setState({ [e.target.name]: '' });

  render() {
    return (
      <div className="new-friend-form" style={{ float: 'right', width: '48%', border: 'thin solid black' }}>
        <h1>New Friend Form</h1>
        <form
          id="addFriendForm"
          style={{ display: 'block', width: '100%' }}
          onSubmit={ this.submitHandler }
        >
          <p>
            <label htmlFor="new-friend-name" style={{ display: 'inline', width: '25%' }}>Name:
              <input
                id="new-friend-name"
                name="name"
                type="text"
                value={this.state.name}
                style={{ width: '75%' }}
                onFocus={ this.focusHandler }
                onChange={ this.changeHandler }
              />
            </label>
          </p>
          <p>
            <label htmlFor="new-friend-age" style={{ width: '25%' }}>Age:
              <input
                id="new-friend-age"
                name="age"
                type="number"
                value={this.state.age}
                style={{ width: '75%' }}
                onFocus={ this.focusHandler }
                onChange={ this.changeHandler }
              />
            </label>
          </p>
          <p>
            <label htmlFor="new-friend-email" style={{ width: '25%' }}>Email:
              <input
                id="new-friend-email"
                name="email"
                type="text"
                value={this.state.email}
                style={{ width: '75%' }}
                onFocus={ this.focusHandler }
                onChange={ this.changeHandler }
              />
            </label>
          </p>
          <p>
            <button
              type="submit"
              form="addFriendForm"
            >
              Submit
            </button>
          </p>
        </form>
      </div>
    )
  }
}


export default NewFriendForm;
