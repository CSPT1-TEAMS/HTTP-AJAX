import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardHeader, CardFooter, Row, Col } from 'reactstrap';
// import "./App.css";

const AddFriendCard = props => {
  return (
    <Row className="Card-row">
      <Col sm="4">
        <Card className="Card-item">
          <CardHeader className="Note-header">
           <h1> {props.name}</h1>
          </CardHeader>
          <CardBody>
            <div>{props.age}</div>
            <div>{props.email}</div>

          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
export default AddFriendCard;