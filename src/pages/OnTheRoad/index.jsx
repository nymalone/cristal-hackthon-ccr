import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/flat.png";
import health from "../../assets/health.png";
import exercise from "../../assets/exercise.png";
import food from "../../assets/food.png";

import Footer from "../../components/Footer";
import { Navbar, Row, Col, Container, Card, CardDeck } from "react-bootstrap";
import { FaRegStar, FaRoad, FaBed, FaRoute, FaMedal } from "react-icons/fa";

export default class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <Navbar id="navbar">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt="logo cristal"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <p className="welcome">Bom descanso!</p>
          </Navbar.Collapse>
        </Navbar>

        <Container id="stats">
          <Row xs={5}>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRegStar className="star-icon" />
                <br />
                2340 pontos
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRoad className="road-icon" />
                <br />
                400km rodados
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaBed className="bed-icon" />
                <br />
                06h de sono
              </Card.Subtitle>
            </Col>
            <Col className="mx-2">
              <Card.Subtitle className="subtitle mt-3 my-3">
                <FaRoute className="route-icon" />
                <br />
                01 destinos
              </Card.Subtitle>
            </Col>
          </Row>
        </Container>

        <Container fluid id="duration">
          <Row>
            <Col>
              <Link to="/dashboard">ENCERRAR VIAGEM</Link>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
