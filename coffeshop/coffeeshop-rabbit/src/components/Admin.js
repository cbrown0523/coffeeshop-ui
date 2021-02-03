import React, { Component } from 'react';
import { Card, Jumbotron,Form, Button, Row, Col, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Admin.css';




export default class Admin extends Component{
    render(){
        return(
            <div className="Admin">
                    <Container>
                     <Card className="mt-5">
                    <Card.Header className="text-center">Add a New Book</Card.Header>
                         <Card.Body>
                             <Card.Text>
                             <Form>
                        <Form.Group controlId="formIsbn">
                            <Form.Label>ISBN:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formAuthor"> 
                            <Form.Label>Author:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formPubYear" >
                            <Form.Label>Publication Year:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formPub">
                            <Form.Label>Publisher:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="img_url_s">
                            <Form.Label>Image_url_s:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="img_url_m">
                            <Form.Label>Image_url_m:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="img_url_l">
                            <Form.Label>Image_url_l:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        <Row>
                           <Col>
                           <Form.Group className="text-center" controlId="copies">
                            <Form.Label>Copies:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        </Col>
                         <Col>
                        <Form.Group className="text-center" controlId="avail">
                            <Form.Label>Availibility:</Form.Label>
                            <Form.Control type="text">
                            </Form.Control>
                        </Form.Group>
                        </Col>
                        </Row>                     
                         <Button variant="primary" className="adminBtn" type="submit">Submit</Button>
                      </Form>
                             </Card.Text>
                             </Card.Body> 
                             </Card> 
                     </Container>
                 </div>
        )
    }
}