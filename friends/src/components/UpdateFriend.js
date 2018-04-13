import React, {Component} from 'react';
import axios from 'axios';

export default class AddFriend extends Component {
    state = {
        name: '',
        age: '',
        email: '',

    }


 componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState(() => ({ friends: response.data }));
      })
      .catch(error => {
        console.error("error", error);
      });
  }

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value})
}
handleSubmit = event =>{
    event.preventDefault();
    

    axios.post("http://localhost:5000/friends", this.state)
    .then(response => console.log(response))
    .then( () => window.location.href ="/") 
    .catch(error => console.log(error))
}    
    
    render(){
           return <div>
               <form onSubmit={this.handleSubmit}>
                 <label>
                   Name:
                   <input type="text" name="name" value={this.state.name} className="inputData" onChange={this.handleChange} />
                 </label>
                 <label>
                   Age:
                   <input type="text" name="age" value={this.state.age} className="inputData" onChange={this.handleChange} />
                 </label>
                 <label>
                   Email:
                   <input type="text" name="email" value={this.state.email} className="inputData" onChange={this.handleChange} />
                 </label>
                 <button type="submit">Add </button>
               </form>
             </div>;
    }
}