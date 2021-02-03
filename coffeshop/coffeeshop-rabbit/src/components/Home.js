
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import {FormControl, InputGroup, Jumbotron, Row, Col, Image, Button, Container} from 'react-bootstrap';
import coffeebeabg from './assets/coffeebea.jpg'

export default class Home extends Component{
    render(){
        return(
         <div className="coffeebeabg" style={{ backgroundImage: `url(${coffeebeabg})` }}>
             <Container>   
           <Jumbotron>
           <InputGroup id="searchBar"  size="lg">
    <FormControl placeholder="Search Our Catalog for your Favorite Book!"
    />
  </InputGroup>
           </Jumbotron>
           <Row className="homebtns">
               <Col >
               <Button variant="secondary"  size="lg" id="viewMen">View Menu</Button>             
                 </Col>
                 <Col >
               <Button variant="secondary"  size="lg" id="bookList">Book Lists</Button>            
                 </Col>
                 <Col >
               <Button variant="secondary"  size="lg" id="staffPks">Staff Picks</Button>             
                 </Col>
           </Row>
           </Container>
            </div>
        )
    }
}