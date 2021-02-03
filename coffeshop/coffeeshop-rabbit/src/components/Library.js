import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Card, ListGroup, Container, Row, Col, Jumbotron, Button, Image} from "react-bootstrap";
import './Library.css';
import booksbg from './assets/bookbg.jpg'
import gradientbg from './assets/gradient.jpg'



export default class Library extends Component{
    render(){
        return(
            <div className="booksbg" style={{ backgroundImage: `url(${booksbg})` }}>  
     <Container> 
        <ListGroup horizontal className="listGroup">
            <ListGroup.Item action variant="dark" href="#link1">Title</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Genre</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Author</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Year</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Status</ListGroup.Item>
</ListGroup>
<Card className="gradientbg" style={{ backgroundImage: `url(${gradientbg})` }}>  
    <Card.Body>
        <Card.Text>
          <Jumbotron id="jumbotron">
      <Image src="#" id="bkImg" title="book  image" thumbnail />
   <p id="bkTitle">Title</p>
    <p id="bkAuthor">Author</p>
    <p id="bkGenre">Genre</p>
   <p id="avail">Available</p>
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

