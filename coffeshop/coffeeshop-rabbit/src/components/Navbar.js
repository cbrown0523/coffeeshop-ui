import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navbar.css';

export default class navbar extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
  Coffee Shop Community Library
    </Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#" id="">
                <img
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top" />
                </Nav.Link>
                
                <Nav.Link href="#" id="">
                <img
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top" />
                </Nav.Link>

                <Nav.Link href="#" id="">
                <img
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top" />
                </Nav.Link>
            </Nav>
          </Navbar>
        )
    }
}