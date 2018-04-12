import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter } from 'reactstrap';


const FriendsList = (props) => {
  return (
    <div>
      <Card>
        <CardTitle>
          <div>Friend's name: {props.friend.name}</div>
        </CardTitle>  
        <CardBody>
          <div>Friends age: {props.friend.age}</div>
          <div>Friends email: {props.friend.email}</div>
        </CardBody>
      </Card>  
    </div>
  );
}

export default FriendsList;

