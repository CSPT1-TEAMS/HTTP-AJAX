import React, {Component} from 'react';
import axios from 'axios';

export default class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',

    }

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
}
handleSubmit = event =>{
    event.preventDefault();
    

    axios.post("http://localhost:5000/friends", this.state)
    .then( () => window.location.href ="/") 
}    
    
    render(){
        return (
            <div>
                <form onSubmit= {this.handleSubmit}>
                <label>
                    Person Name:
                    <input type= "text" name="name" onChange= {this.handleChange}/>
                </label>
                <button type="submit">Add </button>
                </form>
                </div> 
        )
    }
}