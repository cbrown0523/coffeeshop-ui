import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, Container, Row, Col, Jumbotron, Button, Image} from "react-bootstrap";
import './Library.css';

export default class Library extends Component{
    render(){
        return(
            <div>  
     <Container fluid="md"> 
        <ListGroup horizontal className="mt-100">
            <ListGroup.Item action variant="dark" href="#link1">Title</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Genre</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Author</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Year</ListGroup.Item>
            <ListGroup.Item action variant="dark" href="#link1">Status</ListGroup.Item>
</ListGroup>
</Container>
<div className="container2">

<Jumbotron>
<Col xs={6} md={4}>
      <Image src="#" className="bkImg" title="book  image" thumbnail />
    </Col>
    <div>
   <p className="bkTitle">Title</p>
    <p className="bkAuthor">Author</p>
    <p className="bkGenre">Genre</p>
   <p className="avail">Availability</p>
 <Image src="#" className="check" thumbnail/>
            <Button type="submit" variant="success" size="lg">Hold</Button>
    </div>
</Jumbotron>
</div>
            </div>
        )
    }
}