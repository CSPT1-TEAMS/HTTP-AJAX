import React, { Component } from 'react'

export default class AddFriend extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }
//   nameChange = (e) => { this.setState({ name: e.target.value }) }
//   ageChange = (e) => { this.setState({ age: e.target.value }) }
//   emailChange = (e) => { this.setState({ email: e.target.value }) }

  /* A WAY TO DO ALL THREE OF THE ABOVE METHODS IN ONE: */
  inputChange = (type) => {
    return (e) => {
      this.setState({ [type]: e.target.value })
    }
  }
  /* THE ABOVE FUNCTION IS A REFACTOR OF THE ORIGINAL CODE, THIS METHOD IS USED IN THE INPUTS BELOW */
 
  buttonSubmitAdd = () => {
    const { name, age, email } = this.state
    this.props.buttonSubmit({ name, age, email })
  }

 render() {
    return (
      <div>
        <h3>Add Friend</h3>
        <input type='text' placeholder='Name' onChange={this.inputChange('name')} value={this.state.name} />
        <input type='number' placeholder='Age' onChange={this.inputChange('age')} value={this.state.age} />
        <input type='text' placeholder='Email' onChange={this.inputChange('email')} value={this.state.email} />
        <button onClick={this.buttonSubmitAdd}>Submit</button>
      </div>
    )
  }
}