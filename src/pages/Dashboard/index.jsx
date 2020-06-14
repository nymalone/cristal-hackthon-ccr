import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/flat.png';

import { Navbar, Row, Col, Container, Card } from 'react-bootstrap';
import { FaRegStar, FaRoad, FaBed, FaRoute } from 'react-icons/fa';

export default class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <Navbar id="navbar">
          <Navbar.Brand>
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
            <p className="welcome">Bem vindo!</p>
          </Navbar.Collapse>
        </Navbar>

        <Container id="stats">
          <Row xs={5}>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRegStar className="star-icon" />
                <br />
                000 pontos
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRoad className="road-icon" />
                <br />
                00km rodados
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaBed className="bed-icon" />
                <br />
                00h de sono
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRoute className="route-icon" />
                <br />
                00 destinos
              </Card.Subtitle>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
