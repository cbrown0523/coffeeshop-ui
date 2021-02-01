import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import {Jumbotron, Row, Grid, Col, Image, Button} from 'react-bootstrap';

export default class Home extends Component{
    render(){
        return(
<Row>            <Jumbotron>
            <h2>helloworls</h2>
            <p>lorem dfnkdlsfsldfjskdf</p>
            <Link to="/home">
            <Button variant="danger">Danger</Button>   </Link>        </Jumbotron>
            </Row>
        )
    }
}