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

        <Container id="road">
          <Row xs={12}>
            <Col className="mt-5">
              <h4>
                Boa viagem! Dirija com cuidado e siga as nossas recomendações!
                Ao chegar no seu destino envie a palavra <span>DESTINO</span>{" "}
                para nossa conversa no whatsapp. <br />
                Aguardo você!
              </h4>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    );
  }
}
