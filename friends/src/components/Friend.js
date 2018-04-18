import React, {Component} from 'react';
import axios from 'axios';

export default class Friend extends Component{
    constructor(props){
        super(props);
    }
    // handleClick(){
    //     this.props.handleDelete(this.props.friend.id)
    // }
    render(){
        return <li key={this.props.friend.id} className="friend">
            <div className="friend-name">{this.props.friend.name}</div>
            <div className="friend-age">{`Age: ${this.props.friend.age}`}</div>
            <div className="friend-email">{`Email: ${this.props.friend.email}`}</div>
            {/* <button onClick={this.handleClick}>X</button> */}
          </li>;
    }
}