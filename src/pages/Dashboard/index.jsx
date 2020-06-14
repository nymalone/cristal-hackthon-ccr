import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/flat.png';
import { Navbar, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <Navbar id="navbar">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="logo cristal"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="info">
                <Link to="/dashboard">Entrar</Link>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
