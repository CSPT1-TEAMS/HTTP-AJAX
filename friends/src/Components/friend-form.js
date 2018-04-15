/**
   friend-form.js
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
   Updated 2018-04-12T17:14:34
   Version 0.1.0
   ------------------------------
   Updated 2018-04-15T07:38:27
   Version 0.1.1
   Changed name to friend-form.js
   ------------------------------
   Updated 2018-04-15T08:39:58
   Version 0.1.2
   Adjusted styling to place appropriately
   ------------------------------
   Updated 2018-04-15T08:50:42
   Version 0.1.3
   Placed styling into article; made wrapping div unstyled
   ------------------------------
 */

import React, { Component } from 'react';

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Loading',
      age: 0,
      email: 'loading@friends.com'
    }
  }

  defaultFriend = {name:'New Friend',age:0,email:'email@abc.com'};

  componentDidMount() {
    this.setState(Object.assign(this.defaultFriend, this.state.friend));
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
      <div className="friend-form-component">
        <article className="friend-form"
                 style={{ width: '300px', float: 'left', padding: '10px',
                          margin: '10px', marginTop: '87px', border: 'thin solid black' }}
        >
          <header className="friend-form-header">
            <h1 style={{backgroundColor:'cyan'}}>New Friend Form</h1>
          </header>
          <form
            className="friend-form-form"
            id="friend-form-id"
            style={{ display: 'block', width: '100%' }}
            onSubmit={ this.submitHandler }
          >
            <p>
              <label htmlFor="friend-name" style={{ display: 'inline', width: '25%' }}>Name:
                <input
                  id="friend-name"
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
              <label htmlFor="friend-age" style={{ width: '25%' }}>Age:
                <input
                  id="friend-age"
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
              <label htmlFor="friend-email" style={{ width: '25%' }}>Email:
                <input
                  id="friend-email"
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
        </article>
      </div>
    )
  }
}


export default FriendForm;
