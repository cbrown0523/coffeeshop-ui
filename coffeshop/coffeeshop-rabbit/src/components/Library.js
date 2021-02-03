import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card, ListGroup, Container, Row, Col, Jumbotron, Button, Image} from "react-bootstrap";
import './Library.css';

export default class Library extends Component{
    render(){
        return(
            <div className="Library">  
     <Container fluid> 
        <ListGroup horizontal className="listGroup">
            <ListGroup.Item action variant="dark" href="#link1">Title</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Genre</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Author</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Year</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Status</ListGroup.Item>
</ListGroup>

<Card>
    <Card.Body>
        <Card.Text>
          <Jumbotron >
      <Image src="#" id="bkImg" title="book  image" thumbnail />
   <p id="bkTitle">Title</p>
    <p id="bkAuthor">Author</p>
    <p id="bkGenre">Genre</p>
   <p id="avail">Availability</p>
 <Image src="#" id="check" thumbnail/>
            <Button type="submit" id="libBtn" variant="success" size="lg">Hold</Button>  
    </Jumbotron>  
        </Card.Text>
    </Card.Body>
</Card>
 </Container> 
  </div>
        )
    }
}

