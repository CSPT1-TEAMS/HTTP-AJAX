import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter } from 'reactstrap';


class AddFriend extends Component {
    constructor(props){
      super(props);
  
      this.state = {
        name: '',
        age: '',
        email: ''
      }
    }
  
    handleFormSubmit = e => {
      e.preventDefault();
      axios
      .post('http://localhost:5000/friends', {
        name: this.state.name,
        age: this.state.age,
        email: this.state.email
      })
    }
  
    handleFormName = e => {
      const name = e.target.value;
      this.setState ({name});
    }
  
    handleFormAge = e => {
      const age = e.target.value;
      this.setState ({age})
    }
  
    handleFormEmail = e => {
      const email = e.target.value;
      this.setState ({email})
    }
  
    // we can use handle name, email, and age
  
    render() {
      const {name, age, email } = this.state;
  
      return(
        <div className="Card-item">
          <Card>
            <CardBody> 
            <div>       
            <form id="adding" onSubmit={this.handleFormSubmit}>
              <input type="text" value={name} onChange={this.handleFormName} placeHolder="Name"/>
              <input type="text" value={age} onChange={this.handleFormAge} placeHolder="Age"/>
              <input type="text" value={email} onChange={this.handleFormEmail} placeHolder="Email"/>
            </form>
            </div>   
            </CardBody> 
            <CardFooter>
              <button type="submit" form="adding">Send Data!</button>
            </CardFooter>
          </Card>
        </div>
  
        // render form here, get it passed in event function to setState, also, add button 'Submit'
      )
    }
  }

  export default AddFriend;

  /* REACT STRAP EXAMPLE
const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
  */