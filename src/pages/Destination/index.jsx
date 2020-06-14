import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import logo from "../../assets/flat.png";
import { Navbar, Button, Form, Col } from "react-bootstrap";

import Footer from "../../components/Footer";

export default class Home extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      }
    );
  }

  render() {
    return (
      <div id="destination-page">
        <Navbar id="navbar">
          <Navbar.Brand>
            <Link to="/dashboard">
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
            <p className="welcome">Para onde vamos?</p>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <Form>
          <h3> Para onde vamos? </h3>
          <br />

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Endereço</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Bairro</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Cidade</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>AC</option>
                <option>AL</option>
                <option>AP</option>
                <option>AM</option>
                <option>BA</option>
                <option>CE</option>
                <option>DF</option>
                <option>ES</option>
                <option>GO</option>
                <option>MA</option>
                <option>MT</option>
                <option>MS</option>
                <option>MG</option>
                <option>PA</option>
                <option>PB</option>
                <option>PE</option>
                <option>PI</option>
                <option>RJ</option>
                <option>RN</option>
                <option>RR</option>
                <option>SC</option>
                <option>SP</option>
                <option>SE</option>
                <option>AC</option>
                <option>TO</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>CEP</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>
          <Button variant="info" type="submit">
            <Link to="/duration">Começar!</Link>
          </Button>
        </Form>
        <Footer />
      </div>
    );
  }
}
