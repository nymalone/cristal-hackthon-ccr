import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import logo from '../../assets/flat.png';
import { Navbar, Button, Form } from 'react-bootstrap';

import Footer from '../../components/Footer';

export default class SignUp extends Component {
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
            <Navbar.Text>
              <Button variant="info">
                <Link to="/" id="btn-signup">
                  Entrar
                </Link>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

        <Form>
          <br />
          <h2>Crie a sua conta!</h2>
          <br />
          <br />
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              id="input"
              type="password"
              placeholder="Digite sua senha"
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              id="input"
              type="password"
              placeholder="Confirme sua senha"
            />
          </Form.Group>
          <Button id="btn-login" variant="info">
            <Link to="/">Criar minha conta</Link>
          </Button>
          <br />
          <br />
        </Form>

        <Footer />
      </div>
    );
  }
}
